import { Link, routes } from '@redwoodjs/router'  //page Article
import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {  
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  )
}

/** 
 <header>
            <h2><Link to={routes.article({ id: article.id })}>{article.title}</Link></h2>
          </header>
          <p>{article.body}</p>
          <div>Posted at: {article.createdAt}</div>          </article>

*/
