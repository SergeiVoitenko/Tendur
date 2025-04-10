# Использование Node.js 16 на Alpine Linux (легковесный образ)
FROM node:16-alpine

# Создание директории приложения
WORKDIR /app

# Копирование файлов package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install --production

# Копирование остальных файлов приложения
COPY . .

# Открытие порта для приложения
EXPOSE 3000

# Команда для запуска приложения
CMD ["node", "app.js"]
