import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

export default function PreviewBox(props) {
  return (
    <div>
      <ReactMarkdown 
      id='preview' 
      children={props.text} 
      remarkPlugins={[remarkBreaks, remarkGfm]}/>
    </div>
  )
}
