import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack, VStack } from '@chakra-ui/react'
import { CloseLid, MoveAutonomously, OpenLid, Stop, moveBackward, moveForward, moveLeft, moveRight } from './utils'

function App() {

  return (
    <div >
      <Tabs variant='soft-rounded' colorScheme='green' className="bg-white border shadow-lg` my-8 p-4 rounded-xl flex flex-col w-[400px] min-h-32 items-center m-auto">
        <TabList>
          <Tab>Autonomous Mode</Tab>
          <Tab>Driver Controlled Mode</Tab>
        </TabList>
        <TabPanels className='flex justify-center gap-2'>
          <TabPanel>
            <div>
              <Button className='w-full' onClick={() => MoveAutonomously()} colorScheme='blue'>Start</Button>
              <Button className='w-full my-2' onClick={() => Stop()} colorScheme='red'>STOP</Button>
            </div>
          </TabPanel>
          <TabPanel>
            <VStack>
              <Button className='w-full' onClick={() => moveForward()} colorScheme='blue'>Forward</Button>
              <HStack>
                <Button className='w-full' onClick={() => moveLeft()} colorScheme='blue'>Left</Button>
                <Button className='w-full my-2' onClick={() => Stop()} colorScheme='red'>STOP</Button>
                <Button className='w-full' onClick={() => moveRight()} colorScheme='blue'>Right</Button>
              </HStack>
              <Button className='w-full' onClick={() => moveBackward()} colorScheme='blue'>Backward</Button>
            </VStack>
            <p>Bin Lid Control</p>
            <HStack>
                <Button className='w-full' onClick={() => OpenLid()} colorScheme='green'>Open Lid</Button>
                <Button className='w-full my-2' onClick={() => CloseLid()} colorScheme='red'>Close Lid</Button>
              </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default App
