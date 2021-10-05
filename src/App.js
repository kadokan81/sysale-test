import './App.css';
import AmountOfItems from './components/amountOfItems/amountOfItems';
import GoldButton from './components/button/goldBtn';
import CardFrame from './components/cardFrame/cardFrame';
import DropDownComponent from './components/dropDownComponent/dropDownComponent';
import ImageComponent from './components/imageComponent/imageComponent';
import RoundScale from './components/roundScale/roundScale';
import img1 from './assets/img1.jpg';
import img1Hover from './assets/img1small.jpg';
import img2 from './assets/img2.jpg';
import img2Hover from './assets/img2small.jpg';
import img3 from './assets/img3.jpg';
import img3Hover from './assets/img3small.jpg';

import CheckBoxComponent from './components/checkBoxComponent/checkBoxComponent';

function App() {
	return (
		<div className='App'>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<CardFrame>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							alignItems: 'flex-start',
							justifyContent: 'space-between',
						}}>
						<GoldButton size='small'>NEW</GoldButton>
						<ImageComponent srcs={img1} srcOnHover={img1Hover} />
						<RoundScale />
					</div>
					<h3
						style={{
							alignSelf: 'center',
							fontWeight: 'Bold',
							fontSize: '24px',
						}}>
						Шампунь
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco.
					</p>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
						}}>
						<DropDownComponent />
						<span
							style={{
								position: 'absolute',
								right: '0',
								fontSize: '18px',
								fontWeight: '600',
							}}>
							200 грн
						</span>
					</div>
					<div>
						<CheckBoxComponent name={'card2'} />
					</div>
					<div style={{ display: 'flex' }}>
						<AmountOfItems />
						<GoldButton>КУПИТЬ</GoldButton>
					</div>
				</CardFrame>
				<CardFrame>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							alignItems: 'flex-start',
							justifyContent: 'space-between',
						}}>
						<GoldButton size='small'>NEW</GoldButton>
						<ImageComponent srcs={img2} srcOnHover={img2Hover} />
						<RoundScale />
					</div>
					<h3
						style={{
							alignSelf: 'center',
							fontWeight: 'bold',
							fontSize: '24px',
						}}>
						Шампунь
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco.
					</p>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
						}}>
						<DropDownComponent />
						<span
							style={{
								position: 'absolute',
								right: '0',
								fontSize: '18px',
								fontWeight: '600',
							}}>
							200 грн
						</span>
					</div>
					<div>
						<CheckBoxComponent name={'card3'} />
					</div>

					<div style={{ display: 'flex' }}>
						<AmountOfItems />
						<GoldButton>КУПИТЬ</GoldButton>
					</div>
				</CardFrame>
				<CardFrame>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							alignItems: 'flex-start',
							justifyContent: 'space-between',
						}}>
						<GoldButton size='small'>NEW</GoldButton>
						<ImageComponent srcs={img3} srcOnHover={img3Hover} />
						<RoundScale />
					</div>
					<h3
						style={{
							alignSelf: 'center',
							fontWeight: 'bold',
							fontSize: '24px',
						}}>
						Шампунь
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco.
					</p>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
						}}>
						<DropDownComponent />
						<span
							style={{
								position: 'absolute',
								right: '0',
								fontSize: '18px',
								fontWeight: '600',
							}}>
							200 грн
						</span>
					</div>
					<div>
						<CheckBoxComponent name={'card1'} />
					</div>
					<div style={{ display: 'flex' }}>
						<AmountOfItems />
						<GoldButton>КУПИТЬ</GoldButton>
					</div>
				</CardFrame>
			</div>
		</div>
	);
}

export default App;
