import { useState, useEffect } from 'react';

export const Comments = ({ gameId }) => {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = async () => {
    if (!gameId) return;
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8000/games/${gameId}/comments/`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [gameId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await fetch(`http://localhost:8000/games/${gameId}/comments/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author_name: author.trim() || 'Anônimo', content: content.trim() }),
      });
      
      setAuthor('');
      setContent('');
      fetchComments();
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full mt-4">
        <input
          type="text"
          placeholder="Seu nome (opcional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 mb-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none"
        />
        <textarea
          placeholder="Deixe seu comentário..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-2 mb-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none"
        ></textarea>
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors w-full">
          Enviar
        </button>
      </form>
      
      <div className="w-full mt-4 space-y-4 max-h-60 overflow-y-auto">
        {isLoading ? <p className="text-gray-500">Carregando...</p> : comments.map(comment => (
          <div key={comment.id} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            <p className="font-bold text-gray-900 dark:text-white">{comment.author_name}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{comment.content}</p>
          </div>
        ))}
        {!isLoading && comments.length === 0 && <p className="text-gray-500 dark:text-gray-400">Nenhum comentário ainda.</p>}
      </div>
    </div>
  );
};