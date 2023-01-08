
import Columns from './components/Columns';
import ContainerMenu from './components/ContainerMenu';
import HomeHeader from './components/HomeHeader';
import LastPostPreview from './components/LastPostPreview'

function App() {
  return (
    <div>
    <HomeHeader></HomeHeader>
    <ContainerMenu></ContainerMenu>
    <Columns></Columns>
    </div>
  );
}

export default App;