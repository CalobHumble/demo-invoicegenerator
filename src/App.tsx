import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import { Invoice } from './Invoice';
import { useState } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { create } from 'zustand';
import { Input } from '@/components/ui/input';

interface ContactState {
  name: string;
  position: string;
  address: string;
  setName: (name: string) => void;
  setPosition: (position: string) => void;
  setAddress: (address: string) => void;
}

const useSenderStore = create<ContactState>()((set) => ({
  name: '',
  position: '',
  address: '',
  setName: (name) => set(() => ({ name })),
  setAddress: (address) => set(() => ({ address })),
  setPosition: (position) => set(() => ({ position })),
}));

const useToStore = create<ContactState>()((set) => ({
  name: '',
  position: '',
  address: '',
  setName: (name) => set(() => ({ name })),
  setAddress: (address) => set(() => ({ address })),
  setPosition: (position) => set(() => ({ position })),
}))

function App() {
  const [date, setDate] = useState<Date>(new Date());
  const sender = useSenderStore();
  const to = useToStore();
  return (
      <div className='flex flex-row h-full max-h-full'>
        <div className='h-full flex flex-col justify-between px-2 align-center'>
          
        </div>
        <div className='flex-1 h-full mr-2 flex bg-secondary border-2 rounded-xl'>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
              <Input placeholder='Sender Name' value={sender.name} onChange={(e) => sender.setName(e.target.value)}/>
              <Input placeholder='Sender Name' value={sender.position} onChange={(e) => sender.setPosition(e.target.value)}/>
              <Input placeholder='Sender Name' value={sender.address} onChange={(e) => sender.setAddress(e.target.value)}/>

              <Input placeholder='Sender Name' value={to.name} onChange={(e) => to.setName(e.target.value)}/>
              <Input placeholder='Sender Name' value={to.position} onChange={(e) => to.setPosition(e.target.value)}/>
              <Input placeholder='Sender Name' value={to.address} onChange={(e) => to.setAddress(e.target.value)}/>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <PDFViewer width="100%" height="100%">
                <Invoice sender={sender} to={to} date={date} total={1000} />
              </PDFViewer>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
  )
}

export default App
