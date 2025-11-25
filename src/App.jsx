import { useState } from 'react';
import recipesData from './data/recipes.js';

export default function App() {
  const [search, setSearch] = useState('');
  
  const filteredRecipes = recipesData.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase()) ||
    recipe.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Каталог рецептов</h1>
      
      <input
        type="text"
        placeholder="Поиск по названию или описанию..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      {filteredRecipes.length === 0 ? (
        <p>Ничего не найдено </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredRecipes.map(recipe => (
            <li
              key={recipe.id}
              style={{
                border: '1px solid #eee',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '12px',
                backgroundColor: '#fafafa'
              }}
            >
              <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>{recipe.title}</h3>
              <p style={{ margin: '4px 0', color: '#555' }}>{recipe.description}</p>
              <small>
                {recipe.cuisine} •  {recipe.time}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}