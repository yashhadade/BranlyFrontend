import { useEffect, useState } from 'react';
import { Sidebar } from '../Components/Sidebar';
import { CreateContentModel } from '../Components/CreateContentModel';
import { Button } from '../Components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../Components/Card';
import contetnServise from '../Servises/Content';
import { Todo } from '../Components/Todo';

// import { Button } from './Components/Button';
// import { PlusIcon } from './icons/PlusIcon';
// import { ShareIcon } from './icons/ShareIcon';
// import { Card } from './Components/Card';
// import { CreateContentModel } from './Components/CreateContentModel';
// import { Sidebar } from './Components/Sidebar';

function Dashbord() {
  const [selectedItem, setSelectedItem] = useState<string>('card');
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false); // Manage modal open state
  const [content, setContent] = useState<any[]>([])

  const handleSidebarSelect = (item: string) => {
    setSelectedItem(item); // Update the selected item
  };
  // const handleCount = () => {
  //   setCount(count + 1);
  // };

  const handleModalClose = () => {
    setModalOpen(false); // Close the modal
  };
  const getContent = async () => {
    try {
      const res = await contetnServise.getAllContent();
      if (res && res.success) {
        setContent(res.allContent)
      }
      else {
        console.error(
          "Error fetching seller information",
          res.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Failed to fetch seller information:", error);
    }
  }
  useEffect(() => {
    getContent()
  }, [])
  return (
    <div >
      <Sidebar onSelect={handleSidebarSelect} />
      <div className=' p-4 ml-64 h-screen bg-gray-200'>
        {/* Modal with open state and close handler */}
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
            content?.map((data, _id) => {
              return (
                <Card
                  key={_id}
                  title={data.title}
                  link={data.link}
                  type={data.type}
                  notes={data?.notes}
                />
              );
            })
          )}
          {selectedItem === 'todo' && (
            <Todo/>
          )}
          {/* <Card title="My Todo Project" link="https://x.com/100xDevs/status/1881604537016017163" type="twitter" />
        <Card title="My Todo Project" link="https://www.youtube.com/watch?v=CawrB5l1pnU" type="youtube" /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
