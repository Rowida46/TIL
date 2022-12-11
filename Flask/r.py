""""Integer i, j, k, n
Set j=1, k=1
for(each i from 1 to 5)
  print k
  j=j+1
  k=k+j
end for"""

k,j =1,1
for i in range(1,6):
  print(k)
  j += 1
  k += j


def convert(s, numRows):
  if numRows == 1:
    return s
  n = numRows*2-2
  mod = len(s)%n
  arr = [s[i::n] for i in range(n)]
  out = arr[0]
  for i in range(1,numRows-1):
    out += ''.join(c for p in zip(arr[i],arr[n-i]) for c in p)
    if i<= mod-1 < n-i:
      out += arr[i][-1]
  out += arr[numRows-1]
  return out

def StringChallenge(strArr):
  s, numRows = strArr[0], int(strArr[-1])
  if numRows == 1:
    return s
  n = numRows*2-2
  mod = len(s)%n
  arr = [s[i::n] for i in range(n)]
  out = arr[0]
  for i in range(1,numRows-1):
    out += ''.join(c for p in zip(arr[i],arr[n-i]) for c in p)
    if i<= mod-1 < n-i:
      out += arr[i][-1]
  out += arr[numRows-1]
  return out




  return strArr

# keep this function call here 
print(StringChallenge(["kaamvjjfl", "4"]))






class Solution:
    def convert(self, s, numRows):
      lst, move, reverse, k = ['']*n, 0, False, n-1
      if n == 1:
            
            return s
      for index, char in enumerate(s):
          if k == index:

                k = index + n + (n-2)

                reverse = True


          elif move ==0 and index !=0 :

                reverse = False


          if not reverse:

                lst[move] += char

                move += 1


          else:

                lst [move] += char

                move -= 1
        
      return(''.join(lst))
    
s = Solution()