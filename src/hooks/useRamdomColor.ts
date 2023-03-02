export const useRamdomColor = ():string =>{
  
  const colors:string[] = [
    '#93B4CC',
    '#FCA404',
    '#F41212',
    '#ACFC33',
    '#ACFC33',
    '#A786F7',
    '#CF8794',
    '#CF8794'
  ]

  const index: number = Math.floor(Math.random() * colors.length );

  return colors[index];
}