export const logMessage = ({ x = 'default', y }: { x?: string; y?: string }): void => {
  console.log('Function basic sample 1: ', x)
  console.log('Function basic sample 2: ', typeof y, y)
}
