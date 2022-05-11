HOW TO RUN 

Here are some instructions after you download/clone the project :

Open 2 terminals (preferably in the IDE of your choice) - 1 for backend and 1 for the frontend 
Backend : 
type ' export APIKEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUxMjMzOTg4RDI5YmI1MUYzNzZiMDZlZjZGRGQxNTM3NmU0MDQ1QTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDUwNTg5OTcwNjksIm5hbWUiOiI0OTlkYiJ9.kcxiLFJ7_HDbQkYDrxIsvPys4lkWwmcRU0_j6U9moxg '
Change the parameters in the require function of 'empjson' and 'sched' variables to the path from your machine. Find the files under the files folder, right click, copy path, and paste it surrounded by '', the path might contain backslashes (\), so change that to forward slashes (/).
cd into backend in the terminal
type 'node app.js' to start the server
The console should show the api key and 'Example app listening on port 5000 '

Frontend : 
cd into frontend/src 
type 'npm install' in the terminal to install the dependencies
Then type 'yarn start' or 'npm start' to start the server