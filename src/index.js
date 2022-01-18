import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(
    (registration) => {
      console.log('Service worker registration succeeded:', registration)
    },
    (error) => {
      console.log('Service worker registration failed:', error)
    }
  )
} else {
  console.log('Service workers are not supported.')
}
