const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware для обработки JSON
app.use(express.json());

// Базовый роутинг
app.get('/', (req, res) => {
  res.send('Привет! Это мое простое Node.js приложение.');
});

// Статус API
app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Тестовый маршрут для демонстрации
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Это тестовые данные с API',
    items: [
      { id: 1, name: 'Элемент 1' },
      { id: 2, name: 'Элемент 2' },
      { id: 3, name: 'Элемент 3' }
    ]
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Приложение запущено на порту ${port}`);
});

// Обработка неперехваченных исключений
process.on('uncaughtException', (err) => {
  console.error('Неперехваченное исключение:', err);
});
