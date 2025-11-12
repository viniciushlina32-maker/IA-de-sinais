import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const image = formData.get("image") as File;
    const email = formData.get("email") as string;
    const asset = formData.get("asset") as string;
    const expiration = formData.get("expiration") as string;
    const marketType = formData.get("marketType") as string;

    if (!image) {
      return NextResponse.json(
        { error: "Imagem não fornecida" },
        { status: 400 }
      );
    }

    // Simular processamento (5-8 segundos)
    await new Promise(resolve => setTimeout(resolve, 5000 + Math.random() * 3000));

    // Gerar análise profissional simulada
    const isCall = Math.random() > 0.5;
    const probability = Math.floor(65 + Math.random() * 25); // 65-90%

    const trends = [
      "Tendência de alta consolidada com formação de topos e fundos ascendentes",
      "Tendência de baixa confirmada com rompimento de suporte chave",
      "Movimento lateral em zona de congestão, aguardando definição",
      "Reversão de alta em formação após teste de suporte importante",
      "Continuação de tendência de baixa com rejeição em resistência"
    ];

    const entryLevels = [
      "Entrada recomendada após pullback na zona de 0.618 de Fibonacci",
      "Aguardar rompimento confirmado com fechamento acima da resistência",
      "Entrada em zona de suporte psicológico com formação de martelo",
      "Possível entrada em rompimento de linha de tendência de baixa",
      "Entrada após confirmação de padrão de reversão em suporte"
    ];

    const timings = [
      "Momento ideal nas próximas 2-3 velas após confirmação do padrão",
      "Entrada imediata com stop ajustado abaixo do último fundo",
      "Aguardar fechamento da vela atual para confirmação de entrada",
      "Entrada após rompimento com volume acima da média",
      "Momento de entrada na abertura da próxima vela"
    ];

    const callAnalysis = [
      `Análise técnica detalhada do ativo ${asset}:

Observa-se formação de pavio inferior indicando forte pressão compradora na região de suporte. O preço está respeitando a linha de tendência de alta traçada desde os últimos fundos ascendentes.

Indicadores técnicos mostram divergência de alta no RSI, sugerindo enfraquecimento da força vendedora. O MACD apresenta cruzamento de alta, confirmando momentum positivo.

A zona de congestão atual está sendo rompida com volume crescente, característica típica de continuação de tendência. Médias móveis de 20 e 50 períodos estão alinhadas em configuração de alta.

Padrão de candlestick de reversão identificado (martelo/doji) em região de suporte psicológico, aumentando probabilidade de movimento ascendente nas próximas velas.

Recomenda-se entrada em operação CALL com gerenciamento de risco adequado.`,
      
      `Análise profissional do gráfico ${asset}:

Estrutura de mercado apresenta topos e fundos ascendentes, caracterizando tendência de alta bem definida. O preço está testando resistência anterior que agora atua como suporte.

Volume de negociação aumentou significativamente nas últimas velas de alta, confirmando interesse comprador. Bandas de Bollinger mostram expansão, indicando início de movimento direcional.

Fibonacci de retração mostra que o preço respeitou a zona de 0.618, nível clássico de entrada para continuação de tendência. Padrão gráfico de triângulo ascendente em formação.

Indicador estocástico saindo de zona de sobrevenda, gerando sinal de compra. A força relativa do ativo está acima da linha central, confirmando domínio comprador.

Cenário técnico favorável para operação CALL com alta probabilidade de sucesso.`
    ];

    const putAnalysis = [
      `Análise técnica completa do ativo ${asset}:

Identificada formação de pavio superior indicando rejeição de preços mais altos e pressão vendedora dominante. O preço está rompendo linha de tendência de alta, sinalizando possível reversão.

Indicadores técnicos mostram divergência de baixa no RSI, sugerindo enfraquecimento da força compradora apesar de topos mais altos no preço. MACD apresenta cruzamento de baixa, confirmando momentum negativo.

Resistência psicológica está sendo respeitada com formação de padrão de reversão (estrela cadente/enforcado). Volume nas velas de baixa está aumentando, característica de movimento vendedor forte.

Médias móveis de curto prazo cruzaram abaixo das de longo prazo, configuração técnica de baixa. Zona de suporte anterior foi rompida e agora atua como resistência.

Cenário técnico aponta para operação PUT com gerenciamento adequado de risco.`,
      
      `Análise profissional detalhada ${asset}:

Estrutura de mercado mostra topos e fundos descendentes, caracterizando tendência de baixa estabelecida. O preço está testando resistência em retração de Fibonacci 0.382.

Volume aumentou nas velas de baixa, confirmando pressão vendedora. Bandas de Bollinger mostram expansão para baixo, indicando continuação de movimento descendente.

Padrão gráfico de triângulo descendente em formação, típico de continuação de baixa. Preço rejeitou múltiplas vezes a resistência, formando topo triplo.

Estocástico em zona de sobrecompra iniciando movimento de queda. ADX acima de 25 confirma força da tendência de baixa. Ichimoku Cloud mostra preço abaixo da nuvem com projeção negativa.

Análise técnica favorece operação PUT com probabilidade elevada de acerto.`
    ];

    const analysis = isCall 
      ? callAnalysis[Math.floor(Math.random() * callAnalysis.length)]
      : putAnalysis[Math.floor(Math.random() * putAnalysis.length)];

    const result = {
      trend: trends[Math.floor(Math.random() * trends.length)],
      entryLevels: entryLevels[Math.floor(Math.random() * entryLevels.length)],
      timing: timings[Math.floor(Math.random() * timings.length)],
      analysis: analysis,
      verdict: isCall ? "Entrada sugerida: CALL" : "Entrada sugerida: PUT",
      probability: probability,
      timestamp: new Date().toISOString(),
      asset: asset,
    };

    return NextResponse.json(result, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error("Erro na análise:", error);
    
    return NextResponse.json(
      { 
        error: "Erro ao processar análise. Tente novamente.",
        details: error?.message || error?.toString() || "Erro desconhecido"
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
