import { Navbar, Transactions, Welcome, Services, Exchange, Footer } from './components'


const App = () => {

  return (
		<div className="min-h-screen">
			<div className="gradient-bg-welcome">
				<Navbar />
				<Welcome />
				<Exchange/>

				<Services />
			</div>
			<Transactions />
			<Footer />
		</div>
	);
}

export default App
