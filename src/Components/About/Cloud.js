import React from 'react'
import { TagCloud } from 'react-tagcloud'
import "./cloud.css"
const data = [
  { value: 'MongoDB', count: 18 },
  { value: 'Java', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 30 },
  { value: 'CSS3', count: 22 },
  { value: 'React Native', count: 27 },
  { value: 'NPM', count: 11 },
  { value: 'SQL', count: 20 },
  { value: 'SASS', count: 30 },
  { value: 'C#', count: 20 },
]

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: '#ddd',
    }}
  >
    {tag.value}
  </span>
)

export default ()  =>(
  <div className="cloud">
  <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
   </div>
)
