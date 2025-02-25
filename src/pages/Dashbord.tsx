import { useEffect, useState } from 'react';
import { Sidebar } from '../Components/Sidebar';
import { CreateContentModel } from '../Components/CreateContentModel';
import { Button } from '../Components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../Components/Card';
import contetnServise from '../Servises/Content';
import { Todo } from '../Components/Todo';
import { CardView } from './Cards';
import { AllBlog } from './AllBlog';

// import { Button } from './Components/Button';
// import { PlusIcon } from './icons/PlusIcon';
// import { ShareIcon } from './icons/ShareIcon';
// import { Card } from './Components/Card';
// import { CreateContentModel } from './Components/CreateContentModel';
// import { Sidebar } from './Components/Sidebar';

function Dashbord() {
  const [selectedItem, setSelectedItem] = useState<string>('card');
 
  const [modalOpen, setModalOpen] = useState(false); // Manage modal open state
 

  const handleSidebarSelect = (item: string) => {
    setSelectedItem(item); // Update the selected item
  };
  // const handleCount = () => {
  //   setCount(count + 1);
  // };

  const handleModalClose = () => {
    setModalOpen(false); // Close the modal
  };
  
  return (
    <div >
      <Sidebar onSelect={handleSidebarSelect} />
      <div className=' p-4 ml-64 h-[100vw] bg-gray-200'>
        
        <CreateContentModel open={modalOpen} onClosed={handleModalClose} />


        <div className="flex justify-end gap-4">
        {selectedItem === 'card' && (<><Button
            startIcon={<PlusIcon size="md" />}
            variant="primary"
            size="md"
            text="Add Content"
            onClick={() => setModalOpen(true)}
          />


          <Button
            startIcon={<ShareIcon size="md" />}
            variant="secondary"
            size="lg"
            text="Share Brain"
          /></>)}
        </div>

        <div className="flex gap-4 mt-2">
          {selectedItem === 'card' && (
            
            <CardView/>
          )}
          {selectedItem === 'todo' && (
            <Todo/>
          )}
          {selectedItem === 'allBlog' && (
            <AllBlog/>
          )}
         
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
