import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, CheckSquare, Square, Plus, Trash2, Maximize, Minimize, Activity, Download, Save, User, LogOut, Settings } from 'lucide-react';

const FocusFlow = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerMode, setRegisterMode] = useState(false);
  
  const [mode, setMode] = useState('markdown');
  const [markdownContent, setMarkdownContent] = useState('# Добро пожаловать в FocusFlow\n\nНачните писать здесь...');
  const [javaContent, setJavaContent] = useState('public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}');
  const [pythonContent, setPythonContent] = useState('# Python программа\nprint("Hello, World!")');
  const [codeOutput, setCodeOutput] = useState('');
  const [fileName, setFileName] = useState('document');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [typewriterMode, setTypewriterMode] = useState(false);
  
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [pomodoroRunning, setPomodoroRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [pomodoroSessions, setPomodoroSessions] = useState(0);
  const [showTimerSettings, setShowTimerSettings] = useState(false);
  
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  const [activityData, setActivityData] = useState(() => {
    const data = [];
    for (let i = 0; i < 52; i++) {
      data.push(Math.floor(Math.random() * 5));
    }
    return data;
  });
  
  const [activeTab, setActiveTab] = useState('editor');
  const textareaRef = useRef(null);

  const getContent = () => {
    if (mode === 'markdown') return markdownContent;
    if (mode === 'java') return javaContent;
    return pythonContent;
  };

  const setContent = (value) => {
    if (mode === 'markdown') setMarkdownContent(value);
    else if (mode === 'java') setJavaContent(value);
    else setPythonContent(value);
  };

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      const savedData = JSON.parse(localStorage.getItem(`focusflow_${currentUser}`) || '{}');
      if (savedData.markdownContent) setMarkdownContent(savedData.markdownContent);
      if (savedData.javaContent) setJavaContent(savedData.javaContent);
      if (savedData.pythonContent) setPythonContent(savedData.pythonContent);
      if (savedData.tasks) setTasks(savedData.tasks);
      if (savedData.activityData) setActivityData(savedData.activityData);
      else {
        const data = [];
        for (let i = 0; i < 52; i++) {
          data.push(Math.floor(Math.random() * 5));
        }
        setActivityData(data);
      }
      if (savedData.pomodoroSessions) setPomodoroSessions(savedData.pomodoroSessions);
      if (savedData.workDuration) setWorkDuration(savedData.workDuration);
      if (savedData.breakDuration) setBreakDuration(savedData.breakDuration);
    }
  }, [isLoggedIn, currentUser]);

  const saveUserData = () => {
    if (isLoggedIn && currentUser) {
      const userData = {
        markdownContent,
        javaContent,
        pythonContent,
        tasks,
        activityData,
        pomodoroSessions,
        workDuration,
        breakDuration,
        lastSaved: new Date().toISOString()
      };
      localStorage.setItem(`focusflow_${currentUser}`, JSON.stringify(userData));
    }
  };

  useEffect(() => {
    const interval = setInterval(saveUserData, 30000);
    return () => clearInterval(interval);
  }, [markdownContent, javaContent, pythonContent, tasks, activityData, pomodoroSessions, workDuration, breakDuration]);

  const handleAuth = () => {
    if (!loginForm.username || !loginForm.password) return;
    
    if (registerMode) {
      const users = JSON.parse(localStorage.getItem('focusflow_users') || '{}');
      if (users[loginForm.username]) {
        alert('Пользователь уже существует!');
        return;
      }
      users[loginForm.username] = { password: loginForm.password, created: new Date().toISOString() };
      localStorage.setItem('focusflow_users', JSON.stringify(users));
      
      const newActivityData = [];
      for (let i = 0; i < 52; i++) {
        newActivityData.push(0);
      }
      setActivityData(newActivityData);
    } else {
      const users = JSON.parse(localStorage.getItem('focusflow_users') || '{}');
      if (!users[loginForm.username] || users[loginForm.username].password !== loginForm.password) {
        alert('Неверное имя пользователя или пароль!');
        return;
      }
    }
    
    setCurrentUser(loginForm.username);
    setIsLoggedIn(true);
    setLoginForm({ username: '', password: '' });
  };

  const handleLogout = () => {
    saveUserData();
    setIsLoggedIn(false);
    setCurrentUser(null);
    setMarkdownContent('# Добро пожаловать в FocusFlow\n\nНачните писать здесь...');
    setJavaContent('public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}');
    setPythonContent('# Python программа\nprint("Hello, World!")');
    setTasks([]);
    const data = [];
    for (let i = 0; i < 52; i++) {
      data.push(0);
    }
    setActivityData(data);
    setPomodoroSessions(0);
  };

  const updateTimerSettings = () => {
    if (!isBreak) {
      setPomodoroTime(workDuration * 60);
    } else {
      setPomodoroTime(breakDuration * 60);
    }
    setShowTimerSettings(false);
    setPomodoroRunning(false);
  };

  useEffect(() => {
    let interval;
    if (pomodoroRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime(prev => prev - 1);
      }, 1000);
    } else if (pomodoroTime === 0) {
      if (!isBreak) {
        setIsBreak(true);
        setPomodoroTime(breakDuration * 60);
        setPomodoroSessions(prev => prev + 1);
        const today = activityData.length - 1;
        const newData = [...activityData];
        newData[today] = Math.min((newData[today] || 0) + 1, 4);
        setActivityData(newData);
      } else {
        setIsBreak(false);
        setPomodoroTime(workDuration * 60);
      }
      setPomodoroRunning(false);
    }
    return () => clearInterval(interval);
  }, [pomodoroRunning, pomodoroTime, isBreak, workDuration, breakDuration]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const runCode = () => {
    setCodeOutput('');
    const content = getContent();
    
    if (mode === 'python') {
      try {
        let output = '';
        const printFunc = (...args) => {
          output += args.join(' ') + '\n';
        };
        
        const code = content.replace(/print\((.*?)\)/g, (match, args) => {
          return `printFunc(${args})`;
        });
        
        const func = new Function('printFunc', code);
        func(printFunc);
        setCodeOutput(output || 'Программа выполнена успешно');
      } catch (error) {
        setCodeOutput(`Ошибка: ${error.message}`);
      }
    } else if (mode === 'java') {
      try {
        const classMatch = content.match(/class\s+(\w+)/);
        const mainMatch = content.match(/public\s+static\s+void\s+main/);
        
        if (!classMatch || !mainMatch) {
          setCodeOutput('Ошибка: Требуется класс с методом main');
          return;
        }
        
        let output = '';
        const printFunc = (...args) => {
          output += args.join(' ') + '\n';
        };
        
        const systemOutMatch = content.match(/System\.out\.println\((.*?)\);/g);
        if (systemOutMatch) {
          systemOutMatch.forEach(statement => {
            const argMatch = statement.match(/println\((.*?)\)/);
            if (argMatch) {
              try {
                const value = argMatch[1].replace(/"/g, '');
                printFunc(value);
              } catch (e) {
                printFunc(argMatch[1]);
              }
            }
          });
        }
        
        setCodeOutput(output || 'Java программа выполнена успешно\n(Упрощённая симуляция)');
      } catch (error) {
        setCodeOutput(`Ошибка: ${error.message}`);
      }
    }
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        completed: false,
        priority: 'medium',
        createdAt: new Date().toISOString()
      }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const downloadFile = () => {
    const content = getContent();
    const extension = mode === 'markdown' ? '.md' : mode === 'java' ? '.java' : '.py';
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderMarkdown = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('# ')) return <h1 key={i} className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{line.slice(2)}</h1>;
      if (line.startsWith('## ')) return <h2 key={i} className="text-3xl font-bold mb-4 text-cyan-300">{line.slice(3)}</h2>;
      if (line.startsWith('### ')) return <h3 key={i} className="text-2xl font-bold mb-3 text-blue-300">{line.slice(4)}</h3>;
      if (line.startsWith('* ')) return <li key={i} className="ml-6 mb-2 text-gray-300">{line.slice(2)}</li>;
      if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold mb-2 text-white">{line.slice(2, -2)}</p>;
      if (line.startsWith('> ')) return <blockquote key={i} className="border-l-4 border-cyan-500 pl-4 italic mb-2 text-gray-400">{line.slice(2)}</blockquote>;
      return <p key={i} className="mb-2 text-gray-200">{line || '\u00A0'}</p>;
    });
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'border-l-4 border-red-500 bg-red-500/10';
      case 'medium': return 'border-l-4 border-yellow-500 bg-yellow-500/10';
      default: return 'border-l-4 border-green-500 bg-green-500/10';
    }
  };

  const getStreakDays = () => {
    let streak = 0;
    for (let i = activityData.length - 1; i >= 0; i--) {
      if (activityData[i] > 0) streak++;
      else break;
    }
    return streak;
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              FocusFlow
            </h1>
            <p className="text-gray-400 text-lg">Погрузитесь в глубокую работу</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="flex gap-2 mb-6">
              <button onClick={() => setRegisterMode(false)} className={`flex-1 py-2 rounded-lg transition ${!registerMode ? 'bg-cyan-600 text-white' : 'bg-white/5 text-gray-400'}`}>
                Вход
              </button>
              <button onClick={() => setRegisterMode(true)} className={`flex-1 py-2 rounded-lg transition ${registerMode ? 'bg-cyan-600 text-white' : 'bg-white/5 text-gray-400'}`}>
                Регистрация
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Имя пользователя</label>
                <input type="text" value={loginForm.username} onChange={(e) => setLoginForm({...loginForm, username: e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" placeholder="username" />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Пароль</label>
                <input type="password" value={loginForm.password} onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} onKeyPress={(e) => e.key === 'Enter' && handleAuth()} className="w-full bg-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" placeholder="••••••••" />
              </div>
              
              <button onClick={handleAuth} className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg font-semibold text-white transition shadow-lg shadow-cyan-500/30">
                {registerMode ? 'Создать аккаунт' : 'Войти'}
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>Демо: используйте любое имя пользователя и пароль</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {!isFullscreen && (
        <header className="bg-black/30 backdrop-blur-xl border-b border-white/10 p-4 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">FocusFlow</h1>
              <div className="flex items-center gap-2 text-sm bg-white/5 rounded-full px-4 py-2">
                <User className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">{currentUser}</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button onClick={() => setActiveTab('editor')} className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'editor' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/30' : 'bg-white/5 hover:bg-white/10'}`}>Редактор</button>
              <button onClick={() => setActiveTab('tasks')} className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'tasks' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/30' : 'bg-white/5 hover:bg-white/10'}`}>Задачи</button>
              <button onClick={() => setActiveTab('analytics')} className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'analytics' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/30' : 'bg-white/5 hover:bg-white/10'}`}>Аналитика</button>
              <button onClick={handleLogout} className="px-4 py-2 rounded-xl bg-red-600/20 hover:bg-red-600/30 transition-all flex items-center gap-2">
                <LogOut className="w-4 h-4" />Выйти
              </button>
            </div>
          </div>
        </header>
      )}

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className={`${activeTab === 'editor' ? 'lg:col-span-3' : 'hidden lg:block lg:col-span-3'}`}>
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10 flex-wrap gap-2">
                <div className="flex gap-2">
                  <button onClick={() => setMode('markdown')} className={`px-4 py-2 rounded-xl transition-all ${mode === 'markdown' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg' : 'bg-white/5 hover:bg-white/10'}`}>Markdown</button>
                  <button onClick={() => setMode('java')} className={`px-4 py-2 rounded-xl transition-all ${mode === 'java' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg' : 'bg-white/5 hover:bg-white/10'}`}>Java</button>
                  <button onClick={() => setMode('python')} className={`px-4 py-2 rounded-xl transition-all ${mode === 'python' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg' : 'bg-white/5 hover:bg-white/10'}`}>Python</button>
                  {(mode === 'java' || mode === 'python') && (
                    <button onClick={runCode} className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition-all flex items-center gap-2">
                      <Play className="w-4 h-4" />Запустить
                    </button>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} className="bg-white/5 rounded-lg px-3 py-1 text-sm w-32 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Имя файла" />
                  <button onClick={downloadFile} className="px-3 py-2 rounded-xl bg-green-600/20 hover:bg-green-600/30 transition-all" title="Скачать файл">
                    <Download className="w-4 h-4" />
                  </button>
                  <button onClick={saveUserData} className="px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 transition-all" title="Сохранить">
                    <Save className="w-4 h-4" />
                  </button>
                  <button onClick={() => setTypewriterMode(!typewriterMode)} className={`px-3 py-2 rounded-xl transition-all ${typewriterMode ? 'bg-purple-600 shadow-lg' : 'bg-white/5 hover:bg-white/10'}`} title="Режим печатной машинки">TW</button>
                  <button onClick={() => setIsFullscreen(!isFullscreen)} className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                    {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className={`${typewriterMode ? 'flex items-center' : ''}`} style={{ minHeight: '500px' }}>
                <textarea ref={textareaRef} value={getContent()} onChange={(e) => setContent(e.target.value)} className={`w-full h-full bg-transparent text-white resize-none focus:outline-none ${mode !== 'markdown' ? 'font-mono text-cyan-300' : 'text-lg'}`} style={{ lineHeight: '1.8', minHeight: typewriterMode ? '200px' : '500px' }} placeholder="Начните писать свой шедевр..." />
              </div>

              {(mode === 'java' || mode === 'python') && codeOutput && (
                <div className="mt-4 p-4 bg-black/60 rounded-xl border border-green-500/30">
                  <h3 className="text-sm text-green-400 mb-2">Вывод программы:</h3>
                  <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{codeOutput}</pre>
                </div>
              )}

              {mode === 'markdown' && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                    Предварительный просмотр
                  </h3>
                  <div className="prose prose-invert max-w-none bg-white/5 rounded-xl p-6">
                    {renderMarkdown(markdownContent)}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`${activeTab === 'editor' ? 'lg:col-span-1' : 'hidden lg:block lg:col-span-1'} space-y-6`}>
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  Pomodoro
                </h3>
                <button onClick={() => setShowTimerSettings(!showTimerSettings)} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              {showTimerSettings && (
                <div className="mb-4 p-4 bg-white/5 rounded-xl space-y-3">
                  <div>
                    <label className="text-sm text-gray-400 block mb-1">Работа (мин)</label>
                    <input type="number" value={workDuration} onChange={(e) => setWorkDuration(parseInt(e.target.value) || 25)} className="w-full bg-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" min="1" max="60" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 block mb-1">Перерыв (мин)</label>
                    <input type="number" value={breakDuration} onChange={(e) => setBreakDuration(parseInt(e.target.value) || 5)} className="w-full bg-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" min="1" max="30" />
                  </div>
                  <button onClick={updateTimerSettings} className="w-full py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition">Применить</button>
                </div>
              )}
              
              <div className="text-center">
                <div className="relative">
                  <svg className="w-48 h-48 mx-auto" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="8" strokeDasharray={`${(pomodoroTime / (isBreak ? (breakDuration * 60) : (workDuration * 60))) * 283} 283`} strokeLinecap="round" transform="rotate(-90 50 50)" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-4xl font-mono font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {formatTime(pomodoroTime)}
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      {isBreak ? '☕ Перерыв' : '🎯 Работа'}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center gap-3 mt-4">
                  <button onClick={() => setPomodoroRunning(!pomodoroRunning)} className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                    {pomodoroRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button onClick={() => { setPomodoroTime(isBreak ? (breakDuration * 60) : (workDuration * 60)); setPomodoroRunning(false); }} className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                    <SkipForward className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="mt-4 text-sm text-gray-400">
                  Сессий: <span className="text-cyan-400 font-bold">{pomodoroSessions}</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
              <h3 className="text-lg font-semibold mb-4">Статистика</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Дней подряд</span>
                  <span className="text-2xl font-bold text-cyan-400">{getStreakDays()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Задач</span>
                  <span className="text-2xl font-bold text-blue-400">{tasks.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Выполнено</span>
                  <span className="text-2xl font-bold text-green-400">{tasks.filter(t => t.completed).length}</span>
                </div>
              </div>
            </div>
          </div>

          {activeTab === 'tasks' && (
            <div className="lg:col-span-4">
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Список задач</h2>
                
                <div className="flex gap-3 mb-6">
                  <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addTask()} placeholder="Добавить новую задачу..." className="flex-1 bg-white/10 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
                  <button onClick={addTask} className="px-5 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {tasks.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <CheckSquare className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p>Нет задач. Добавьте первую!</p>
                    </div>
                  ) : (
                    tasks.map(task => (
                      <div key={task.id} className={`flex items-center gap-4 p-4 rounded-xl ${getPriorityColor(task.priority)} ${task.completed ? 'opacity-60' : ''} transition-all hover:scale-[1.02]`}>
                        <button onClick={() => toggleTask(task.id)} className="flex-shrink-0">
                          {task.completed ? (
                            <CheckSquare className="w-6 h-6 text-green-400" />
                          ) : (
                            <Square className="w-6 h-6" />
                          )}
                        </button>
                        <span className={`flex-1 text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
                          {task.text}
                        </span>
                        <select value={task.priority} onChange={(e) => { setTasks(tasks.map(t => t.id === task.id ? { ...t, priority: e.target.value } : t)); }} className="bg-white/10 rounded-lg px-3 py-1 text-sm focus:outline-none">
                          <option value="high">🔴 Срочно</option>
                          <option value="medium">🟡 Важно</option>
                          <option value="low">🟢 Низкий</option>
                        </select>
                        <button onClick={() => deleteTask(task.id)} className="text-red-400 hover:text-red-300 transition">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="lg:col-span-4">
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-3">
                  <Activity className="w-10 h-10 text-cyan-400" />
                  Аналитика продуктивности
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-cyan-600/10 to-cyan-700/10 rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all hover:scale-105">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
                    <div className="relative">
                      <div className="text-6xl font-black text-cyan-400 mb-3">{getStreakDays()}</div>
                      <div className="text-sm font-medium text-cyan-300/80 uppercase tracking-wide">🔥 Дней подряд</div>
                      <div className="mt-2 text-xs text-gray-400">Ваша текущая серия</div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-blue-700/10 rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all hover:scale-105">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="relative">
                      <div className="text-6xl font-black text-blue-400 mb-3">{pomodoroSessions}</div>
                      <div className="text-sm font-medium text-blue-300/80 uppercase tracking-wide">⏱️ Pomodoro сессий</div>
                      <div className="mt-2 text-xs text-gray-400">Всего завершено</div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-600/10 to-purple-700/10 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-105">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="relative">
                      <div className="text-6xl font-black text-purple-400 mb-3">{tasks.filter(t => t.completed).length}</div>
                      <div className="text-sm font-medium text-purple-300/80 uppercase tracking-wide">✅ Задач выполнено</div>
                      <div className="mt-2 text-xs text-gray-400">Из {tasks.length} всего</div>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">История активности</h3>
                    <div className="text-sm text-gray-400">Последние 12 недель</div>
                  </div>
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10">
                    <div className="grid grid-cols-12 gap-3">
                      {activityData.slice(-12).map((level, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                          <div className={`w-full aspect-square rounded-xl transition-all hover:scale-110 cursor-pointer shadow-lg ${
                            level === 0 ? 'bg-gray-800 hover:bg-gray-700' :
                            level === 1 ? 'bg-cyan-900 hover:bg-cyan-800 shadow-cyan-900/50' :
                            level === 2 ? 'bg-cyan-700 hover:bg-cyan-600 shadow-cyan-700/50' :
                            level === 3 ? 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/50' :
                            'bg-cyan-300 hover:bg-cyan-200 shadow-cyan-300/50'
                          }`} title={`${level} сессий`} />
                          <span className="text-xs text-gray-500">Н{i + 1}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-white/10">
                      <span className="text-xs text-gray-400">Нет активности</span>
                      <div className="flex gap-2">
                        <div className="w-5 h-5 bg-gray-800 rounded"></div>
                        <div className="w-5 h-5 bg-cyan-900 rounded"></div>
                        <div className="w-5 h-5 bg-cyan-700 rounded"></div>
                        <div className="w-5 h-5 bg-cyan-500 rounded"></div>
                        <div className="w-5 h-5 bg-cyan-300 rounded"></div>
                      </div>
                      <span className="text-xs text-gray-400">Высокая активность</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Еженедельный прогресс</h3>
                  <div className="space-y-5">
                    {[
                      { week: '📅 Эта неделя', value: activityData[activityData.length - 1] || 0, max: 5, color: 'from-cyan-500 to-blue-500' },
                      { week: '📆 Прошлая неделя', value: activityData[activityData.length - 2] || 0, max: 5, color: 'from-blue-500 to-purple-500' },
                      { week: '📋 2 недели назад', value: activityData[activityData.length - 3] || 0, max: 5, color: 'from-purple-500 to-pink-500' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-all">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-base font-semibold text-white">{item.week}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{item.value}</span>
                            <span className="text-sm text-gray-400">/ {item.max}</span>
                          </div>
                        </div>
                        <div className="relative bg-white/10 rounded-full h-4 overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full transition-all duration-700 shadow-lg`} style={{ width: `${(item.value / item.max) * 100}%` }} />
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                            {Math.round((item.value / item.max) * 100)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FocusFlow;