import { useState } from 'react';
import { Button } from './Components/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
import { Card } from './Components/Card';
import { CreateContentModel } from './Components/CreateContentModel';
import { Sidebar } from './Components/Sidebar';

function App() {
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false); // Manage modal open state

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleModalClose = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div >
        <Sidebar/>
      <div className=' p-4 ml-48 h-screen bg-gray-200'>
      {/* Modal with open state and close handler */}
      <CreateContentModel open={modalOpen} onClosed={handleModalClose} />
      
     
      <div className="flex justify-end gap-4">
      <Button
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
        />
      </div>

      <div className="flex gap-4 mt-2">
        <Card title="My Todo Project" link="https://x.com/100xDevs/status/1881604537016017163" type="twitter" />
        <Card title="My Todo Project" link="https://www.youtube.com/watch?v=CawrB5l1pnU" type="youtube" />
      </div>
      </div>
    </div>
  );
}

export default App;
