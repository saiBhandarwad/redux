import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account.js';
import Bonus from './components/Bonus';
import Reward from './components/Reward';

function App() {
  const  amount = useSelector(state=>state.account.amount)
  const rewardPoints = useSelector(state => state.reward.points)
  const points = useSelector(state=>state.bonus.points)
  return (
    <>
      <div >
        <h3 className="main_heading">App</h3>
        <h3 className='yellow'>Total Bonus : {points}</h3>
        <h3 className='yellow'>Current Amount : {amount}</h3>
        <h3 className='yellow'>Total Reward : {rewardPoints}</h3>
      </div>
      <hr />
      <Account/>
      <hr />
      <Bonus/>
      <hr />
      <Reward></Reward>
    </>
  );
}

export default App;
