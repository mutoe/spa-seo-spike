import React, {useState, useEffect} from 'react'
import marked from 'marked'

const Article = ({name}) => {
  const [content, setContent] = useState('')

  const fetchArticle = async (name) => {
    const headers = new Headers()
    headers.append('Content-Type', 'plain/text')
    fetch(`/${name}.md`,{ headers, })
      .then(res => res.text())
      .then(md => {
        setContent(marked(md))
      })
  }
  useEffect(() => {
    fetchArticle(name)
  })

  return <div className="markdown-body" dangerouslySetInnerHTML={{__html:content || 'Loading...'}}/>
}

export default Article
