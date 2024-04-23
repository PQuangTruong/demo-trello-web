import  Container  from '@mui/material/Container';
import AppBar from '../../component/AppBar';
import BoardBar from './BoardBar';
import BoardContent from './BoardContent';

function Board() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: "100vh", backgroundColor: "primary.main" }} >
       <AppBar/>
        <BoardBar/>
        <BoardContent/>
      </Container>
    </>
  );
}

export default Board