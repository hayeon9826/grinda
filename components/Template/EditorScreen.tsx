
import React, { useState } from 'react'
import { ErrorAlert } from '@components/ErrorAlert'
import { EditorIntro } from "@components/Template/EditorIntro"

const EditorScreen = () => {
  const [sections, setSections] = useState<object[]>([]);
  return (
    <>
      <div className="lg:pl-64 flex flex-col">
        <div className="overflow-y-auto">
          <div className="h-screen flex items-center justify-center border-4 border-dotted">
            {sections && sections.length ? sections?.map((section) => (
              section
            )) : <EditorIntro />}
          </div>
          <ErrorAlert />
        </div>
      </div>
    </>
  );
};

export default EditorScreen;
