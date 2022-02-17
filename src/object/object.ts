export default function objectSample() {
  const country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  country.name = 'hoge'

  console.log('Object: ', typeof country, country)

  //   country = {
  //     language: 'English',
  //     name: 'America',
  //   }

  console.log('Object: ', typeof country, country)

  type Knight = {
    hp: number
    weapon: string
  }

  type Wizard = {
    hp: number
    mp: number
  }

  type Adventurer = Knight | Wizard
  type Paradin = Knight & Wizard

  const k: Adventurer = {
    hp: 100,
    mp: 0,
    weapon: 'sord',
  }

  const w: Adventurer = {
    hp: 100,
    mp: 200,
  }

  console.log('k', typeof k, k)
  console.log('w', typeof w, w)

  const paladin: Paradin = {
    hp: 30,
    mp: 30,
    weapon: 'gun',
  }

  console.log('paladin', typeof paladin, paladin)
}
