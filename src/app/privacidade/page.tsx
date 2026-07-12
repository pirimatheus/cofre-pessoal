export default function PoliticaPrivacidade() {
  return (
    <div className="max-w-2xl mx-auto p-6" style={{ color: "var(--color-text-primary)" }}>
      <h1 className="font-semibold mb-4" style={{ fontSize: "var(--font-size-lg)" }}>
        Política de Privacidade
      </h1>

      <p className="mb-3" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>
        Última atualização: julho de 2026
      </p>

      <h2 className="font-semibold mt-5 mb-2" style={{ fontSize: "var(--font-size-md)" }}>1. Quais dados coletamos</h2>
      <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>
        Coletamos seu nome e e-mail (via login do Google) e os dados financeiros que você cadastra
        no app: transações, metas e limites de orçamento.
      </p>

      <h2 className="font-semibold mt-5 mb-2" style={{ fontSize: "var(--font-size-md)" }}>2. Como protegemos seus dados</h2>
      <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>
        Seus valores financeiros são armazenados com criptografia. O acesso à sua conta pode ser
        protegido por um PIN adicional. Registramos tentativas de login para identificar acessos suspeitos.
      </p>

      <h2 className="font-semibold mt-5 mb-2" style={{ fontSize: "var(--font-size-md)" }}>3. Com quem compartilhamos</h2>
      <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>
        Não vendemos nem compartilhamos seus dados financeiros com terceiros para fins de marketing.
        Um resumo (sem identificadores) pode ser enviado a um serviço de IA apenas quando você usa o
        assistente financeiro, e apenas para gerar a resposta solicitada.
      </p>

      <h2 className="font-semibold mt-5 mb-2" style={{ fontSize: "var(--font-size-md)" }}>4. Seus direitos</h2>
      <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>
        Você pode excluir todos os seus dados a qualquer momento em Configurações → Excluir minha conta.
        Essa ação é permanente e remove todas as suas transações, metas, limites e login do sistema.
      </p>

      <h2 className="font-semibold mt-5 mb-2" style={{ fontSize: "var(--font-size-md)" }}>5. Contato</h2>
      <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>
        Dúvidas sobre seus dados podem ser enviadas para [seu e-mail de contato aqui].
      </p>
    </div>
  );
}