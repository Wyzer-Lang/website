import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tokyoNight } from './TokyoNight';
import './CodeShowcase.css';

const codeExamples = {
  helloWorld: {
    title: 'Hello World',
    description: 'The classic starting point. Clean and readable syntax inspired by modern languages.',
    code: `fn main() {
    std::io::println("Hello, World!");
}`
  },
  ifElse: {
    title: 'Control Flow',
    description: 'Simple and strict control flow. Brackets are always required for clarity.',
    code: `fn main() {
    let x: u32 = 10;
    
    if x > 5 {
        std::io::println("x is greater than 5");
    } else {
        std::io::println("x is 5 or less");
    }
}`
  },
  generics: {
    title: 'Generics',
    description: 'Write code that works with any type. Apply the generic<T> tag to structs and functions.',
    code: `// A struct that can hold anything!
generic<T> struct Box {
    item: T
}

fn main() {
    // We are making a Box that holds a u32 number
    let num_box: generic<u32> Box = 
        generic<u32> Box { item: 42 };

    // We are making a Box that holds a string
    let word_box: generic<str> Box = 
        generic<str> Box { item: "Hello" };
}`
  },
  memory: {
    title: 'Perceus Memory Model',
    description: 'Lightning-fast memory management without a Garbage Collector. Wyzer safely mutates data in-place when it is no longer needed.',
    code: `struct Point { x: u32, y: u32 }

fn main() {
    var p: Point = Point { x: 10, y: 20 };
    
    // The compiler knows 'p' is never used again after this.
    // Instead of asking for new memory, it overwrites 'p' directly!
    var p2: Point = Point { x: 100, y: p.y };
}`
  },
  choreography: {
    title: 'Distributed Choreography',
    description: 'Write code for multiple computers in a single file. The compiler automatically figures out network messages and splits the binaries.',
    code: `role @Server;
role @Sensor;

// This function lives and runs ONLY on the Sensor
fn get_temperature() @ Sensor -> u32 {
    return 72;
}

fn main() @ Server {
    // The Server gets data from the Sensor, safely transferred
    let data: u32 = transfer(
        get_temperature(), 
        Server
    );
    std::io::println(data);
}`
  }
};

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState('helloWorld');

  return (
    <section id="examples" className="code-showcase-section">
      <div className="showcase-container">
        
        <div className="showcase-text">
          <h2 className="showcase-title">Code that writes itself.</h2>
          <p className="showcase-subtitle">{codeExamples[activeTab].description}</p>
          
          <div className="tab-buttons">
            {Object.keys(codeExamples).map((key) => (
              <button 
                key={key} 
                className={`tab-button ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {codeExamples[key].title}
              </button>
            ))}
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="mac-buttons">
              <div className="mac-btn close"></div>
              <div className="mac-btn minimize"></div>
              <div className="mac-btn maximize"></div>
            </div>
            <div className="terminal-title">main.wyz</div>
          </div>
          <div className="terminal-body">
            <SyntaxHighlighter 
              language="rust" 
              style={tokyoNight} 
              wrapLines={true}
              wrapLongLines={true}
              customStyle={{
                margin: 0,
                padding: '20px',
                background: 'transparent',
                fontSize: '1rem',
                lineHeight: '1.5',
                overflowX: 'hidden'
              }}
            >
              {codeExamples[activeTab].code}
            </SyntaxHighlighter>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodeShowcase;
