import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors w-full"
          >
            Voltar para Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-block border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors w-full"
          >
            Página Anterior
          </button>
        </div>
        
        <div className="mt-12">
          <div className="flex justify-center space-x-6 text-gray-400">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.83 9 11 5.16-1.17 9-5.45 9-11V7l-10-5z"/>
            </svg>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound