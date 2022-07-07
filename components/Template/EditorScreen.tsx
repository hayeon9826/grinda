
import React, { useState, useEffect } from 'react'
import { ErrorAlert } from '@components/ErrorAlert'
import { EditorIntro } from "@components/Template/EditorIntro"
import { Nav1 } from './Component/Navbar';

const EditorScreen = () => {
  
  const [sections, setSections] = useState<string[]>([]);
  useEffect(() => {
    setSections([Nav1])
  }, [])
  return (
    <>
      <div>
        <div className="lg:pl-64 flex flex-col">
          <div className="overflow-y-auto">
            <ErrorAlert />
          </div>
          {sections && sections.length ? sections?.map((section, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: section }} />
          )) : 
            <div className="h-screen flex items-center justify-center border-4 border-dotted">
              <EditorIntro />
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default EditorScreen;
