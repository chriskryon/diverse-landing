import { CopyBlock, dracula } from "react-code-blocks";

export default function ApiCodeBlock() {
  const code = `const response = await fetch('https://api.diverse.com/v1/pix', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer SEU_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 1000.00,
    recipient: 'cnpj:12.345.678/0001-99',
    description: 'Pagamento de fornecedor'
  })
  });
  const data = await response.json();
  console.log(data.qrCode); // Exibe QR Code`
  return (
    <CopyBlock
      text={code}
      language="typescript"
      showLineNumbers={false}
      theme={dracula}
      codeBlock
      customStyle={{ backgroundColor: "#282a36", borderRadius: "8px" }}
    />
  )
}