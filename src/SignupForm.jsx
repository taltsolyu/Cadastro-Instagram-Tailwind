import { FaFacebookSquare } from "react-icons/fa";

function SignupForm() {
  return (
    <>
      <div className="bg-white border border-insta-border rounded-[1px] p-10 mb-2.5">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            alt="Instagram"
            className="h-[51px] w-auto"
          />
        </div>
        <h2 className="text-base font-semibold text-insta-text-light text-center mb-4">
          Cadastre-se para ver fotos e vídeos dos seus amigos.
        </h2>
        <button className="w-full bg-[#0095f6] hover:bg-[#1877f2] text-white font-semibold text-sm rounded py-1.5 px-2 flex justify-center items-center gap-2 mb-4 transition-colors">
          <FaFacebookSquare size={20} className="text-white" />
          Entrar com o Facebook
        </button>
        <div className="flex items-center my-4">
          <div className="h-px bg-insta-border flex-grow"></div>
          <div className="px-4 text-xs font-semibold text-insta-text-light uppercase">
            Ou
          </div>
          <div className="h-px bg-insta-border flex-grow"></div>
        </div>
        <form className="flex flex-col gap-1.5">
          <input
            type="text"
            placeholder="Número do celular ou email"
            className="text-xs bg-insta-bg border border-insta-border rounded-[3px] p-2.5 focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Nome completo"
            className="text-xs bg-insta-bg border border-insta-border rounded-[3px] p-2.5 focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Nome de usuário"
            className="text-xs bg-insta-bg border border-insta-border rounded-[3px] p-2.5 focus:outline-none focus:border-gray-400"
          />
          <input
            type="password"
            placeholder="Senha"
            className="text-xs bg-insta-bg border border-insta-border rounded-[3px] p-2.5 focus:outline-none focus:border-gray-400"
          />
          <p className="text-xs text-insta-text-light text-center my-3">
            As pessoas que usam nosso serviço podem ter enviado suas informações
            de contato para o Instagram.
            <a href="#" className="font-medium text-insta-link">
              {" "}Saiba mais
            </a>
          </p>
          <p className="text-xs text-insta-text-light text-center mb-3">
            Ao se cadastrar, você concorda com nossos
            <a href="#" className="font-medium text-insta-link"> Termos</a>,
            <a href="#" className="font-medium text-insta-link"> Política de Privacidade</a> e
            <a href="#" className="font-medium text-insta-link"> Política de Cookies</a>.
          </p>
          <button
            type="submit"
            className="w-full bg-[#0095f6] text-white font-semibold text-sm rounded py-1.5 px-2 opacity-70 cursor-not-allowed"
            disabled
          >
            Cadastre-se
          </button>
        </form>
      </div>
      <div className="bg-white border border-insta-border rounded-[1px] p-6 text-center">
        <p className="text-sm text-insta-text-dark">
          Tem uma conta?
          <a href="#" className="text-insta-blue font-semibold ml-1">
            Conecte-se
          </a>
        </p>
      </div>
    </>
  );
}

export default SignupForm;
