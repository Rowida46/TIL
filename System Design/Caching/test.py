def FindIntersection(strArr):
  ans = ','.join([i for i in strArr[0].split(',') if i in strArr[-1].split(',')])
  return ans if ans else 'false'
  #return [i for i in strArr[0].split(", ")]
# keep this function call here 
print(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))