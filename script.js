const head = document.querySelector('header')
const gridSel = document.getElementsByClassName('grid')
const grid = gridSel[0]
const gen1 = `{
    "generation": "Color (First)",
    "region": "Kanto",
    "yearOfRelease": 1996,
    "pokedex": [
        {
            "name": "Oddish",
            "img": "images/43Oddish.png",
            "code": 43,
            "from": "None",
            "type": ["Grass", " Poison"],
            "height": 0.5,
            "abilities": [
                "Chlorophyll",
                " Run Away"
            ]
        },
        {
            "name": "Abra",
            "img": "images/63Abra.png",
            "code": 63,
            "from": "None",
            "type": "Physic",
            "height": 0.9,
            "abilities": [
                "Inner Focus",
                " Magic Guard"
            ]
        },
        {
            "name": "Cubone",
            "img": "images/104Cubone.png",
            "code": 104,
            "from": "None",
            "type": "Ground",
            "height": 0.4,
            "abilities": [
                "Rock Head",
                " Battle Armor"
            ]
        }
    ]
}`
const gen2 = `{
    "generation": "Gold & Silver (Second)",
    "region": "Johto",
    "yearOfRelease": 1999,
    "pokedex": [
        {
            "name": "Togepi",
            "img": "images/175Togepi.webp",
            "code": 175,
            "from": "None",
            "type": "Fairy",
            "height": 0.3,
            "abilities": [
                "Serene Grace",
                " Super Luck"
            ]
        },
        {
            "name": "Chikorita",
            "img": "images/152Chikorita.png",
            "code": 152,
            "from": "None",
            "type": "Grass",
            "height": 0.9,
            "abilities": [
                "Overgrow",
                " Leaf Guard"
            ]
        },
        {
            "name": "Marill",
            "img": "images/183Marill.png",
            "code": 183,
            "from": "Azurill",
            "type": ["Water", " Fairy"],
            "height": 0.4,
            "abilities": [
                "Huge Power",
                " Sap Sipper"
            ]
        }
    ]
}`
const gen3 = `{
    "generation": "Advanced (Third)",
	"region": "Hoenn",
	"yearOfRelease": 2003,
    "pokedex": [
        {
  			"name": "Treecko",
   			"img": "images/252Treecko.png",
   			"code": 252,
   			"from": "None",
   			"type": "Grass",
  			"height": 0.5,
            "abilities": [
    			"Overgrow",
                " Unburden"
    		]
		},
        {
            "name": "Makuhita",
            "img": "images/296Makuhita.png",
            "code": 296,
            "from": "None",
            "type": "Fighting",
            "height": 1,
            "abilities": [
                "Thick Guts",
                " Sheer Force"
            ]
        },
        {
        	"name": "Gardevoir",
            "img": "images/282Gardevoir.png",
        	"code": 282,
            "from": "Kirlia",
            "type": ["Physic", " Fairy"],
            "height": 1.6,
            "abilities": [
            	"Synchronize",
                " Telepathy"
            ]
        }
    ]
}`

const Jgen1 = JSON.parse(gen1)
const Jgen2 = JSON.parse(gen2)
const Jgen3 = JSON.parse(gen3)

changeGen(Jgen1)

function changeGen(genElement){
    const headDel = document.getElementsByClassName('Hdiv')
    var headDelLength = headDel.length
    const pokeDel = document.getElementsByClassName('card')
    var pokeDelLength = pokeDel.length

    for(var i = 0; i < headDelLength; i++){
        var eleDel = headDel[i]
        eleDel.remove()
    }
    for(var i = pokeDelLength - 1; i >= 0; i--){
        var eleDel = pokeDel[i]
        eleDel.remove()
    }

	createHeader(genElement)
	showPokedex(genElement)
}


function createHeader(json){
	const Hdiv = document.createElement('div')
    Hdiv.className = "Hdiv"
	
	const title = document.createElement('h1')
	title.textContent = json['generation'] + ' Gen Pokédex'
	title.className = "headTitle"

	const region = document.createElement('h4')
	region.textContent = 'Region: ' + json['region']
	region.className = "headText"

	const date =  document.createElement('h4')
	date.textContent = 'Year of release: ' + json['yearOfRelease']
	date.className = "headText"
	
	head.appendChild(Hdiv)
	Hdiv.appendChild(title)
	Hdiv.appendChild(region)
	Hdiv.appendChild(date)
}

function showPokedex(json){
	
	const pokedex = json['pokedex']
	for(var i = 0; i < pokedex.length; i++){

		const card = document.createElement('div')
		card.className = "card"

		const pokeImg = document.createElement('img')
		pokeImg.src = pokedex[i].img

		const body = document.createElement('div')
		body.className = "card-body"

		const pokeName = document.createElement('h4')
		pokeName.textContent = pokedex[i].name
		pokeName.className = "card-title"

		const pokeCode = document.createElement('p')
		pokeCode.textContent = 'Pokédex Code: #' + pokedex[i].code
		pokeCode.className = "card-text"

		const pokeType = document.createElement('p')
		pokeType.textContent = 'Type: ' + pokedex[i].type
		pokeType.className = "card-text"
		
		const pokeEvo = document.createElement('p')
		pokeEvo.textContent = 'Evolutioned from: ' + pokedex[i].from
		pokeEvo.className = "card-text"

		const pokeHeight = document.createElement('p')
		pokeHeight.textContent = 'Height: ' + pokedex[i].Height
		pokeHeight.className = "card-text"

		const pokeAbilities = document.createElement('p')
		pokeAbilities.textContent = pokedex[i].abilities
		pokeAbilities.className = "card-text"

		grid.appendChild(card)
		card.appendChild(pokeImg)
		card.appendChild(body)
		body.appendChild(pokeName)
		body.appendChild(pokeCode)
		body.appendChild(pokeType)
		body.appendChild(pokeEvo)
		body.appendChild(pokeHeight)
		body.appendChild(pokeAbilities)
	}
}