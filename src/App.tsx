import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack, VStack } from '@chakra-ui/react'

function App() {

  return (
<div >
<Tabs variant='soft-rounded' colorScheme='green' className="bg-white border shadow-lg my-8 p-4 rounded-xl flex flex-col w-[400px] min-h-32 items-center m-auto">
  <TabList>
    <Tab>Autonomous Mode</Tab>
    <Tab>Driver Controlled Mode</Tab>
  </TabList>
  <TabPanels className='flex justify-center gap-2'>
    <TabPanel>
      <div>
        <Button className='w-full' colorScheme='blue'>Start</Button>
        <Button className='w-full my-2' colorScheme='red'>STOP</Button>
      </div>
    </TabPanel>
    <TabPanel>
      <VStack>
        <Button className='w-full' colorScheme='blue'>Forward</Button>
        <HStack>
        <Button className='w-full' colorScheme='blue'>Left</Button>
        <Button className='w-full' colorScheme='blue'>Right</Button>
        </HStack>
        <Button className='w-full' colorScheme='blue'>Backward</Button>
      </VStack>
      <Button className='w-full my-2' colorScheme='red'>STOP</Button>
    </TabPanel>
  </TabPanels>
</Tabs>
</div>
  )
}

export default App
