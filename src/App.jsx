import Footer from './Footer';
import SignupForm from './SignupForm';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-insta-bg text-insta-text-dark font-sans">
      <main className="flex-grow w-full max-w-[935px] mx-auto flex justify-center items-center py-8 px-4 md-insta:px-0">
        <div className="flex w-full">
          <div className="flex flex-col w-full max-w-[350px] mx-auto md-insta:mx-0 md-insta:w-auto md-insta:flex-grow">
            <SignupForm />
            <div className="text-center py-4 px-2">
              <p className="text-sm text-insta-text-dark">Obtenha o aplicativo.</p>
              <div className="flex justify-center gap-2 mt-4">
                <a href="#" aria-label="Baixar na App Store">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Baixar na App Store" className="h-10" />
                </a>
                <a href="#" aria-label="Baixar no Google Play">
                  <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Baixar no Google Play" className="h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;