import app from './app'
import './database'
import 'regenerator-runtime'

app.listen(app.get('port'))
console.log('Server on port', app.get('port'))
