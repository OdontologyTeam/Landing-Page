import Head from 'next/head'

export default function HeadSEO(props) {
  const { title } = props
  return (
    <Head>
      <title>
        {title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charset="utf-8"/>
      <meta 
        name="description" 
        content="Especialista en endodoncia capacitada para prevenir, diagnosticar, pronosticar y tratar las anomalías pulpare, 
        perirradiculares y trauma dento alveolar en pacientes pediátricos, adultos y geriátricos. Preparada para realizar trabajo
        interdisciplinario con las demás especialidades de la odontología,
        utilizando tecnología de punta."
      />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
    </Head>
  )
}