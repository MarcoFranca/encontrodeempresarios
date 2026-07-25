# AGENTS.md — Encontro de Empresários

## 1. Missão do projeto

Transformar a landing page atual do **Encontro de Empresários** em um ativo de conversão premium, com direção de arte comparável a eventos empresariais de alto padrão.

O objetivo não é apenas “deixar bonito”. A página deve:

- elevar a percepção de valor do evento;
- comunicar autoridade, exclusividade e relevância empresarial;
- aumentar o desejo de participar;
- reduzir dúvidas e objeções;
- conduzir o visitante com clareza até a compra do ingresso;
- funcionar com excelência em desktop e mobile;
- carregar rapidamente e manter boa acessibilidade.

A implementação deve parecer criada por uma equipe sênior de branding, direção de arte, UX e CRO — nunca por um template genérico.

---

## 2. Contexto atual

A página já possui uma base funcional e uma estrutura inicial com:

- hero;
- definição de público;
- pilares do evento;
- convidados;
- anfitrião;
- ingressos;
- local;
- FAQ;
- CTA final;
- CTA fixo no mobile.

Informações atualmente presentes:

- Evento: **Encontro de Empresários**
- Anfitrião: **Paulo Henriques**
- Data: **21 de agosto de 2026**
- Horário: **10h às 18h**
- Local: **Plataforma Internacional**
- Endereço: **Alameda Tocantins, 956 — Alphaville Industrial, Barueri/SP**
- Ingresso individual: **R$ 197**
- Ingresso dupla: **R$ 347**
- Ingresso VIP: **R$ 1.197**
- Convidados citados: **Pablo Marçal** e **Bruno Avelar**

Não inventar números, resultados, depoimentos, empresas, biografias, garantias, disponibilidade, quantidade de vagas ou credenciais não confirmadas.

Quando faltar uma informação real, usar um placeholder explícito e centralizado em um arquivo de conteúdo, por exemplo:

```ts
proof: "[INSERIR NÚMERO VALIDADO]"
```

Nunca publicar texto provisório como se fosse verdadeiro.

---

## 3. Diagnóstico da versão atual

A versão atual tem uma boa intenção visual, mas ainda apresenta sinais de página intermediária:

- excesso de estilos inline;
- componentes pouco reutilizáveis;
- hierarquia visual repetitiva;
- seções com aparência de blocos independentes;
- pouca construção narrativa;
- ausência de prova social robusta;
- pouca tensão entre problema, oportunidade e decisão;
- cards genéricos;
- efeitos visuais sem um sistema consistente;
- tipografia de impacto usada em excesso;
- CTAs semelhantes, sem progressão psicológica;
- pouca diferenciação entre ingresso comum, dupla e VIP;
- placeholders visíveis de conteúdo;
- pouca profundidade editorial;
- ausência de tracking estruturado;
- FAQ e checkout ainda genéricos.

O refino deve preservar o que funciona e reconstruir o restante com critério.

---

## Regra contra minimalismo excessivo

Não interpretar “premium” como vazio, frio ou excessivamente discreto.

A landing page é de um evento presencial e precisa transmitir:

- energia;
- pessoas;
- atmosfera;
- movimento;
- proximidade;
- ambição;
- pertencimento;
- desejo.

Respiro visual deve existir, mas sempre sustentado por composição, imagem, hierarquia ou narrativa.

Evitar:

- grandes áreas vazias sem intenção;
- textos secundários pequenos;
- cards baseados apenas em iniciais;
- ausência de fotografias;
- CTAs discretos;
- repetição contínua do mesmo layout;
- estética de relatório institucional.

O resultado deve equilibrar:

**sofisticação + energia + humanidade + conversão.**

## 4. Big Idea

> **A sala certa encurta anos de tentativa.**

Essa é a ideia central da página.

O evento não deve ser vendido como “mais um dia de palestras”. Deve ser posicionado como um ambiente de aceleração empresarial:

- acesso a pessoas;
- acesso a repertório;
- acesso a decisões;
- acesso a relações que normalmente levam anos para serem construídas.

A promessa deve ser forte, mas responsável. Não prometer enriquecimento, faturamento garantido ou transformação automática.

---

## 5. Ângulo estratégico

### Ângulo principal

**Ambiente, proximidade e decisão.**

O visitante deve sentir que:

- continuar isolado custa caro;
- consumir mais conteúdo não resolve sozinho;
- empresários crescem mais rápido quando entram em ambientes melhores;
- o evento reúne estratégia prática, repertório e networking qualificado;
- estar presente é uma decisão de posicionamento.

### Emoções prioritárias

1. Ambição
2. Pertencimento
3. Autoridade
4. Exclusividade
5. Urgência real
6. Segurança para comprar

### Evitar

- promessa milagrosa;
- agressividade vazia;
- ostentação caricata;
- linguagem de coach genérico;
- exageros não comprovados;
- frases abstratas sem consequência prática;
- excesso de dourado;
- visual de “evento de marketing digital barato”.

---

## 6. Mecanismo proprietário

Nome recomendado:

# **Efeito Sala Certa**

Definição:

> O crescimento não depende apenas do que você sabe. Depende da qualidade das conversas, referências, relações e decisões às quais você tem acesso.

O mecanismo deve aparecer ao longo da página, não apenas em uma seção isolada.

Possíveis desdobramentos:

- repertório certo;
- conexões certas;
- provocações certas;
- decisões mais rápidas;
- execução mais madura.

Não transformar o nome em uma fórmula pseudocientífica.

---

## 7. Arquitetura de conversão obrigatória

A página final deve seguir esta narrativa.

### 7.1 Header discreto

- logo do evento;
- data e cidade;
- CTA “Garantir ingresso”;
- header transparente no topo;
- ao rolar, aplicar fundo translúcido, blur e borda sutil;
- navegação curta: Experiência, Convidados, Ingressos, FAQ;
- no mobile, evitar menu complexo caso a página seja one-page.

### 7.2 Hero de alto impacto

Objetivo: gerar desejo e clareza em até 5 segundos.

Elementos:

- eyebrow com data/local;
- headline forte;
- subheadline concreta;
- CTA primário;
- CTA secundário para conhecer a experiência;
- microcopy de lote;
- composição visual com profundidade;
- logo integrada, não apenas “solta”;
- imagem ou vídeo cinematográfico, caso existam ativos aprovados;
- faixa de credibilidade ou informações práticas.

Direção sugerida de copy:

**Headline**
> Um dia na sala certa pode mudar a velocidade das suas decisões.

**Subheadline**
> Estratégia prática, conexões empresariais e conversas que normalmente levariam anos para acontecer — concentradas em uma experiência presencial em Alphaville.

**CTA**
> Garantir meu ingresso

**Microcopy**
> 21 de agosto · 10h às 18h · Alphaville/SP

Manter a frase “Um dia na sala certa vale mais que um ano tentando sozinho” como alternativa de campanha, mas testar legibilidade e credibilidade.

### 7.3 Seção de tensão / belief break

Título possível:

> O problema não é falta de informação. É continuar decidindo sozinho.

Mostrar o custo invisível de:

- permanecer no operacional;
- repetir decisões sem repertório externo;
- frequentar ambientes sem ambição;
- consumir conteúdo sem proximidade;
- crescer sem relações estratégicas.

Usar contraste visual entre “mais conteúdo” e “melhor ambiente”.

### 7.4 Apresentação do Efeito Sala Certa

Criar uma seção editorial, não apenas quatro cards.

Estrutura:

- explicação do mecanismo;
- diagrama ou sequência;
- quatro dimensões:
  - repertório;
  - estratégia;
  - relacionamento;
  - decisão.

Pode usar linha progressiva, grid assimétrico ou cards conectados.

### 7.5 Experiência do evento

Não usar apenas “o que você vai viver”.

Mostrar o dia como uma jornada:

1. chegada e conexão;
2. abertura e provocação;
3. conteúdo aplicável;
4. networking;
5. convidados;
6. decisões e próximos passos.

Não inventar agenda ou horários detalhados sem confirmação. Quando necessário, usar blocos conceituais em vez de cronograma falso.

### 7.6 Para quem é / para quem não é

Criar qualificação e leve polarização.

**É para:**

- empresários;
- donos de negócio;
- sócios;
- gestores que precisam sair do operacional;
- empreendedores que valorizam conexões e execução.

**Não é para:**

- quem busca fórmula mágica;
- quem quer apenas assistir passivamente;
- quem não pretende aplicar nada;
- quem espera resultado sem decisão e execução.

A linguagem deve ser firme, não hostil.

### 7.7 Convidados

Cada convidado deve ter:

- foto profissional;
- nome;
- descrição curta;
- credencial validada;
- tema ou contribuição esperada, se confirmado;
- efeito visual premium no hover;
- enquadramento fotográfico consistente.

Não usar bios genéricas como “um dos maiores nomes” sem validação e contexto.

Caso uma bio esteja incompleta, centralizar em `content/event.ts` e marcar como pendente.

### 7.8 Autoridade do anfitrião

Paulo Henriques deve aparecer como curador da sala e não apenas como “mais um palestrante”.

Estrutura recomendada:

- retrato editorial;
- manifesto curto;
- trajetória;
- números validados;
- empresas, projetos ou realizações confirmadas;
- motivo pelo qual ele criou o encontro;
- assinatura ou frase pessoal.

Não inventar provas.

### 7.9 Prova social

Prioridade alta.

Adicionar somente quando houver materiais reais:

- depoimentos;
- fotos de eventos anteriores;
- logos autorizadas;
- números validados;
- vídeos;
- prints com autorização;
- citações curtas.

Sem provas reais, usar uma seção de “o que torna esta experiência diferente”, sem simular validação.

### 7.10 Oferta e ingressos

Os planos devem vender experiências diferentes, não apenas quantidades.

#### Individual — R$ 197
- acesso ao evento;
- ideal para empresário ou gestor individual.

#### Dupla — R$ 347
- dois acessos;
- foco em sócios;
- reforçar benefício estratégico de tomar decisões em conjunto.

#### VIP — R$ 1.197
- acesso completo;
- almoço;
- assento premium;
- demais benefícios somente se confirmados.

O VIP deve ter maior destaque visual, mas sem prejudicar a leitura dos outros planos.

Adicionar:

- comparação clara;
- microcopy de segurança;
- política de transferência/reembolso real;
- checkout real;
- estados de loading;
- eventos de analytics.

Urgência deve ser verdadeira:

- lote;
- data de virada;
- quantidade real;
- prazo real.

Nunca criar contador falso.

### 7.11 Objeções

Antes do FAQ, inserir uma seção curta de redução de risco:

- “Não conheço ninguém.”
- “Não sei se é para o meu momento.”
- “Tenho pouco tempo.”
- “Já participei de outros eventos.”
- “Vale levar meu sócio?”

Responder com clareza, sem manipulação.

### 7.12 Local

Transformar o local em parte da experiência:

- foto do espaço, se disponível;
- mapa;
- endereço;
- acesso;
- estacionamento, apenas se confirmado;
- indicação de Alphaville como polo empresarial, sem exageros.

### 7.13 FAQ

Usar `Accordion` do shadcn/ui.

As respostas devem ser específicas e operacionais.

Itens mínimos:

- emissão do ingresso;
- credenciamento;
- política de transferência;
- política de cancelamento;
- estacionamento;
- dress code;
- alimentação;
- ingresso VIP;
- canal de suporte;
- nota fiscal, caso aplicável.

### 7.14 CTA final

Não repetir o hero de maneira literal.

Direção:

> Você pode continuar tentando acelerar sozinho.  
> Ou pode entrar na sala onde as decisões acontecem mais rápido.

CTA:

> Quero estar nessa sala

### 7.15 Footer

- empresa responsável;
- CNPJ validado;
- contato;
- política de privacidade;
- termos;
- política do evento;
- redes oficiais;
- direitos autorais.

---

## 8. Sistema visual

### Posicionamento visual

**Dark premium empresarial + editorial cinematográfico.**

Referências conceituais:

- private equity;
- conferências premium;
- arquitetura corporativa;
- clubes de negócios;
- publicações editoriais;
- eventos com atmosfera de palco e bastidores.

Não copiar visualmente nenhuma marca específica.

### Paleta

Usar preto-azulado como base, branco mineral, cinzas frios e dourado controlado.

```css
--background: #050a14;
--background-elevated: #091120;
--surface: #0d1728;
--surface-soft: rgba(255, 255, 255, 0.035);
--foreground: #f5f4ef;
--muted: #a6adba;
--muted-dark: #737d8e;
--border: rgba(255, 255, 255, 0.10);
--gold: #d8b45a;
--gold-light: #f3dda0;
--gold-dark: #8e6b24;
--blue: #315fbe;
```

Regras:

- dourado é acento, não fundo dominante;
- evitar amarelo saturado;
- evitar gradiente metálico em todos os elementos;
- efeitos de luz devem ser suaves;
- usar bordas finas e contraste por luminosidade.

### Tipografia

Recomendação:

- Display: **Bebas Neue**, **Oswald**, **Barlow Condensed** ou outra fonte condensada premium disponível via `next/font`;
- Corpo: **Inter**, **Manrope** ou **Geist**;
- evitar Anton em todos os títulos;
- usar caixa alta apenas onde ela melhora a hierarquia;
- limitar largura de parágrafos;
- aplicar `text-wrap: balance` e `text-wrap: pretty`.

A escolha final deve ser carregada via `next/font`.

### Grid e espaçamento

- largura máxima principal: 1200–1280px;
- hero pode usar container maior;
- seções com respiro de 96–160px no desktop;
- 64–96px no mobile;
- grid de 12 colunas;
- assimetria editorial;
- evitar sequência interminável de grids 3x1 ou 4x1.

### Imagens

- usar `next/image`;
- definir `sizes`;
- prevenir CLS;
- usar `priority` somente no hero;
- aplicar tratamento consistente;
- recortes editoriais;
- overlays sutis;
- não usar imagens genéricas de aperto de mãos ou pessoas apontando para gráficos.

### Logo

A logo fornecida deve ser tratada como ativo de marca, mas pode exigir:

- limpeza de fundo;
- versão monocromática;
- versão clara;
- versão horizontal;
- redução de ruído visual;
- revisão de legibilidade em tamanhos pequenos.

Não redesenhar ou deformar sem autorização.

---

## 9. Motion design e efeitos

A animação deve reforçar percepção, não distrair.

### Permitido

- reveal de texto com `opacity`, `translateY` e máscara;
- parallax muito sutil;
- glow reagindo ao cursor em desktop;
- luz ambiente em background;
- movimento lento de gradiente;
- marquee discreto com palavras-chave;
- hover de cards com elevação e borda;
- contadores apenas para dados reais;
- transições de 200–700ms;
- animação de linha ou grid;
- sticky storytelling;
- imagens com leve escala ao entrar na viewport.

### Evitar

- partículas aleatórias;
- excesso de blur;
- neon;
- animação em todos os elementos;
- texto pulando;
- rotação exagerada;
- cursor customizado;
- scroll hijacking;
- vídeo pesado sem poster;
- efeitos que prejudiquem a leitura.

### Acessibilidade

Respeitar:

```css
@media (prefers-reduced-motion: reduce) {
  /* remover movimentos não essenciais */
}
```

Nenhuma informação deve depender exclusivamente de animação.

---

## 10. Stack obrigatória

- Next.js 16
- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- `next/font`
- `next/image`

Motion:

- preferir CSS para microinterações;
- usar Motion somente quando necessário;
- não adicionar bibliotecas pesadas sem justificativa.

Componentes shadcn recomendados:

- `Button`
- `Badge`
- `Card`
- `Accordion`
- `Separator`
- `Dialog`
- `Sheet`, apenas se necessário
- `Tooltip`, apenas quando houver necessidade real

A interface não deve parecer um catálogo padrão do shadcn. Os componentes devem ser personalizados pelo sistema visual da marca.

---

## 11. Arquitetura recomendada

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    opengraph-image.tsx
    icon.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
      site-header.tsx
      site-footer.tsx
      mobile-cta.tsx
    sections/
      hero-section.tsx
      belief-break-section.tsx
      mechanism-section.tsx
      experience-section.tsx
      audience-section.tsx
      speakers-section.tsx
      host-section.tsx
      proof-section.tsx
      tickets-section.tsx
      objections-section.tsx
      venue-section.tsx
      faq-section.tsx
      final-cta-section.tsx
    shared/
      section-heading.tsx
      reveal.tsx
      magnetic-button.tsx
      ambient-background.tsx
      event-meta.tsx
      ticket-card.tsx
    ui/
  content/
    event.ts
  lib/
    analytics.ts
    utils.ts
  types/
    event.ts
public/
  images/
  brand/
```

Regras:

- conteúdo separado da apresentação;
- uma seção por componente;
- Server Components por padrão;
- `"use client"` somente quando houver interação;
- não colocar toda a página em um componente cliente;
- evitar arquivos gigantes;
- componentes reutilizáveis;
- tipagem explícita para ingressos, convidados, FAQ e provas.

---

## 12. Modelo de conteúdo

Criar uma fonte única de verdade.

```ts
export const eventContent = {
  name: "Encontro de Empresários",
  host: "Paulo Henriques",
  date: "2026-08-21",
  dateLabel: "21 de agosto de 2026",
  timeLabel: "10h às 18h",
  city: "Alphaville, SP",
  venue: {
    name: "Plataforma Internacional",
    address: "Alameda Tocantins, 956 — Alphaville Industrial, Barueri/SP",
  },
  checkout: {
    individual: "[INSERIR URL]",
    duo: "[INSERIR URL]",
    vip: "[INSERIR URL]",
  },
}
```

Não espalhar valores, datas e URLs em diversos componentes.

---

## 13. Copywriting

### Princípios

- frases curtas;
- ritmo;
- contraste;
- consequência prática;
- autoridade;
- especificidade;
- linguagem empresarial;
- evitar jargão desnecessário;
- não usar clichês sem sustentação.

### Estrutura interna de cada seção

1. Hook
2. Tensão
3. Revelação
4. Evidência
5. Convite

### Vocabulário prioritário

- decisão;
- ambiente;
- repertório;
- execução;
- crescimento;
- gestão;
- relacionamento;
- estratégia;
- posicionamento;
- sociedade;
- liderança;
- próximos passos.

### Vocabulário a reduzir

- desbloquear;
- jornada incrível;
- experiência transformadora;
- sair da zona de conforto;
- virar a chave;
- método secreto;
- oportunidade única;
- evento imperdível;
- networking poderoso.

Essas expressões somente podem aparecer quando forem reescritas de forma concreta e original.

---

## 14. CRO e UX

### CTA

Usar uma nomenclatura consistente:

- primário: `Garantir meu ingresso`;
- contextual: `Quero estar nessa sala`;
- plano: `Escolher ingresso individual`, `Ir com meu sócio`, `Escolher experiência VIP`.

### Mobile

- CTA fixo somente após o hero;
- não cobrir conteúdo;
- considerar safe-area;
- manter botão com altura mínima de 48px;
- cards empilhados;
- preço e benefício visíveis sem expansão;
- mapa não deve prejudicar scroll;
- tipografia sem quebras ruins.

### Formulários e checkout

Caso o checkout seja externo:

- links reais;
- `target` apenas quando fizer sentido;
- parâmetros UTM preservados;
- tracking de clique;
- estado visual de navegação;
- não usar botão sem destino.

### Analytics

Preparar eventos:

```ts
hero_cta_click
header_cta_click
ticket_view
ticket_select
checkout_click
speaker_view
faq_open
map_click
whatsapp_click
```

Não instalar múltiplos trackers sem necessidade.

### Testes de copy sugeridos

Hero A:
> Um dia na sala certa pode mudar a velocidade das suas decisões.

Hero B:
> Um dia na sala certa vale mais que um ano tentando sozinho.

CTA A:
> Garantir meu ingresso

CTA B:
> Quero estar nessa sala

Não implementar testes A/B improvisados. Apenas deixar arquitetura preparada.

---

## 15. SEO e metadata

Criar metadata real:

- title;
- description;
- canonical;
- Open Graph;
- Twitter card;
- favicon;
- imagem social;
- schema.org `Event`;
- sitemap;
- robots.

Exemplo de descrição:

> Um encontro presencial para empresários, sócios e gestores que buscam estratégia prática, conexões qualificadas e decisões mais maduras. 21 de agosto, em Alphaville/SP.

Não usar claims não comprovados na metadata.

---

## 16. Performance

Metas:

- Lighthouse Performance ≥ 90;
- Accessibility ≥ 95;
- Best Practices ≥ 95;
- SEO ≥ 95;
- LCP abaixo de 2,5s em condições razoáveis;
- CLS próximo de zero;
- imagens otimizadas;
- JavaScript cliente mínimo.

Regras:

- não usar vídeo autoplay pesado no mobile;
- carregar mapas sob demanda ou após interação, se necessário;
- lazy load abaixo da dobra;
- evitar fontes em excesso;
- evitar sombras e filtros caros em grandes áreas;
- não importar bibliotecas inteiras;
- não adicionar dependência para algo simples em CSS.

---

## 17. Acessibilidade

Obrigatório:

- HTML semântico;
- contraste AA;
- foco visível;
- navegação por teclado;
- `aria-label` em controles;
- `alt` descritivo;
- títulos hierárquicos;
- links distinguíveis;
- botões reais para ações;
- accordion acessível;
- tamanho mínimo de toque;
- `prefers-reduced-motion`;
- não usar texto dourado de baixo contraste sobre branco;
- não usar apenas cor para comunicar diferenças.

---

## 18. Processo de trabalho do agente

Antes de alterar qualquer arquivo:

1. ler a estrutura do repositório;
2. identificar stack, dependências e convenções;
3. executar o projeto;
4. capturar o estado atual;
5. localizar ativos existentes;
6. listar informações reais e placeholders;
7. criar um plano breve;
8. implementar por etapas;
9. validar em desktop e mobile;
10. executar lint, typecheck e build.

Ao trabalhar em projeto existente:

- não apagar funcionalidades sem entender;
- não reescrever tudo por impulso;
- preservar integrações;
- preservar URLs;
- preservar tracking;
- preservar conteúdo validado;
- evitar mudanças destrutivas.

---

## 19. Critérios de aceite

A entrega só está concluída quando:

- a página possui narrativa clara;
- o hero comunica evento, público, data e ação;
- a estética é premium e consistente;
- não há placeholders visíveis não sinalizados;
- os convidados possuem conteúdo validado ou marcação de pendência;
- ingressos possuem destinos reais ou configuração centralizada;
- o mobile está refinado;
- não há overflow horizontal;
- animações respeitam reduced motion;
- header e CTA funcionam;
- FAQ funciona por teclado;
- metadata está configurada;
- build passa;
- TypeScript passa;
- lint passa;
- não existem erros no console;
- o código está modular;
- a página não parece um template genérico;
- os efeitos não prejudicam performance;
- nenhum dado foi inventado.

---

## 20. Checklist visual final

Antes de finalizar, revisar:

- O primeiro frame parece um evento de R$ 197 ou uma marca de alto valor?
- A página transmite “sala de empresários” ou “infoproduto genérico”?
- Existe profundidade sem excesso de efeitos?
- O dourado está sendo usado como joia ou como tinta?
- A tipografia tem contraste e ritmo?
- As imagens parecem parte da mesma campanha?
- O VIP parece superior por valor, não apenas por brilho?
- Cada seção conduz naturalmente à próxima?
- A pessoa entende por que deve ir?
- A pessoa entende para quem é?
- A pessoa confia?
- A pessoa sabe o que fazer?
- O CTA aparece no momento certo?
- A versão mobile mantém a mesma percepção premium?

Se qualquer resposta for “não”, refinar antes de encerrar.

---

## 21. Proibições

Não fazer:

- template genérico de SaaS;
- estética de dashboard;
- excesso de gradientes dourados;
- contagem regressiva falsa;
- depoimentos inventados;
- logos sem autorização;
- números fabricados;
- animações em excesso;
- bibliotecas sem necessidade;
- uma página inteira em `"use client"`;
- estilos inline em massa;
- fonte Anton em todos os elementos;
- cards idênticos em todas as seções;
- placeholders publicados;
- checkout apontando para `#`;
- copiar linguagem ou design de Pablo Marçal ou de qualquer outra marca;
- prometer resultado financeiro;
- usar urgência artificial.

---

## 22. Prioridade de implementação

### Fase 1 — Fundação
- auditar projeto;
- organizar conteúdo;
- criar tokens;
- definir tipografia;
- modularizar componentes;
- configurar metadata.

### Fase 2 — Conversão
- reconstruir hero;
- belief break;
- Efeito Sala Certa;
- experiência;
- público;
- ingressos;
- objeções;
- CTA final.

### Fase 3 — Autoridade
- convidados;
- anfitrião;
- provas reais;
- local;
- FAQ.

### Fase 4 — Refinamento
- motion;
- responsividade;
- performance;
- acessibilidade;
- analytics;
- testes finais.

---

## 23. Comando operacional para o Codex

Ao receber uma tarefa neste repositório:

> Analise primeiro o estado atual e este AGENTS.md. Preserve fatos e integrações existentes. Construa a solução com direção de arte premium, copy orientada à conversão, arquitetura modular em Next.js 16 e componentes personalizados com shadcn/ui. Não invente conteúdo. Não faça alterações destrutivas. Execute lint, typecheck e build antes de concluir. Mostre ao final: arquivos alterados, decisões tomadas, pendências de conteúdo real e validações executadas.
