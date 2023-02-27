const ImageString = ({ text }) => {

  // Convert the string into an array.
  const charArray = text.split("");
  let fileArray = [charArray.length]


  // Convert the array of chars into an array of filenames of selected char.
  for (let i = 0; i < charArray.length; i++) {
    let randomInt = Math.floor(Math.random() * 3);

    fileArray[i] = (charDict.get(charArray[i])[randomInt]);
    

  }

    const charElems = fileArray.map((char, index) => (
        <img key={index} alt={index} src={`./${char}`} />
    ))

    return <div>{charElems}</div>
}

const charDict = new Map([
    ['A', ['character000.png', 'character001.png', 'character002.png']],
    ['a', ['character003.png', 'character004.png', 'character005.png']],
    ['B', ['character006.png', 'character007.png', 'character008.png']],
    ['b', ['character009.png', 'character010.png', 'character011.png']],
    ['C', ['character012.png', 'character013.png', 'character014.png']],
    ['c', ['character015.png', 'character016.png', 'character017.png']],
    ['D', ['character018.png', 'character019.png', 'character020.png']],
    ['d', ['character021.png', 'character022.png', 'character023.png']],
    ['E', ['character024.png', 'character025.png', 'character026.png']],
    ['e', ['character027.png', 'character028.png', 'character029.png']],
    ['F', ['character030.png', 'character031.png', 'character032.png']],
    ['f', ['character033.png', 'character034.png', 'character035.png']],
    ['G', ['character036.png', 'character037.png', 'character038.png']],
    ['g', ['character039.png', 'character040.png', 'character041.png']],
    ['H', ['character042.png', 'character043.png', 'character044.png']],
    ['h', ['character045.png', 'character046.png', 'character047.png']],
    ['I', ['character048.png', 'character049.png', 'character050.png']],
    ['i', ['character051.png', 'character052.png', 'character053.png']],
    ['J', ['character054.png', 'character055.png', 'character056.png']],
    ['j', ['character057.png', 'character058.png', 'character059.png']],
    ['K', ['character060.png', 'character061.png', 'character062.png']],
    ['k', ['character063.png', 'character064.png', 'character065.png']],
    ['L', ['character066.png', 'character067.png', 'character068.png']],
    ['l', ['character069.png', 'character070.png', 'character071.png']],
    ['M', ['character072.png', 'character073.png', 'character074.png']],
    ['m', ['character075.png', 'character076.png', 'character077.png']],
    ['N', ['character078.png', 'character079.png', 'character080.png']],
    ['n', ['character081.png', 'character082.png', 'character083.png']],
    ['O', ['character084.png', 'character085.png', 'character086.png']],
    ['o', ['character087.png', 'character088.png', 'character089.png']],
    ['P', ['character090.png', 'character091.png', 'character092.png']],
    ['p', ['character093.png', 'character094.png', 'character095.png']],
    ['Q', ['character096.png', 'character097.png', 'character098.png']],
    ['q', ['character099.png', 'character100.png', 'character101.png']],
    ['R', ['character102.png', 'character103.png', 'character104.png']],
    ['r', ['character105.png', 'character106.png', 'character107.png']],
    ['S', ['character108.png', 'character109.png', 'character110.png']],
    ['s', ['character111.png', 'character112.png', 'character113.png']],
    ['T', ['character114.png', 'character115.png', 'character116.png']],
    ['t', ['character117.png', 'character118.png', 'character119.png']],
    ['U', ['character120.png', 'character121.png', 'character122.png']],
    ['u', ['character123.png', 'character124.png', 'character125.png']],
    ['V', ['character126.png', 'character127.png', 'character128.png']],
    ['v', ['character129.png', 'character130.png', 'character131.png']],
    ['W', ['character132.png', 'character133.png', 'character134.png']],
    ['w', ['character135.png', 'character136.png', 'character137.png']],
    ['Y', ['character138.png', 'character139.png', 'character140.png']],
    ['y', ['character141.png', 'character142.png', 'character143.png']],
    ['Z', ['character144.png', 'character145.png', 'character146.png']],
    ['z', ['character147.png', 'character148.png', 'character149.png']],


]);

export default ImageString;