"""LRU cache is a cache data structure that has limited space, and once there are more items in the cache than available space, it will preempt the least recently used item. What counts as recently used is any item a key has 'get' or 'put' called on it.

Implement an LRU cache class with the 2 functions 'put' and 'get'. 'put' should place a value mapped to a certain key, and preempt items if needed. 'get' should return the value for a given key if it exists in the cache, and return None if it doesn't exist.

Here's some examples and some starter code.


"""

class URLCache(object):
	"""docstring for URLCache"""
	def __init__(self, capacity = 26):
		self.capacity = capacity
		self.lookup = []
		self.cache = {}

	def set(self, key, value):
		if key in self.cache:
			"""key is already in the cache dict as well as the lockup of the most recently search
			1- remove & and move to the front the key in the lookup search list
			"""
			self.lookup.remove(key)
			self.lookup.append(key)
		else:
			"""the key doesn't exist at the cashe 
			1- to check first the len of the lookup search
			2- if we exceed the max capacity
				2.1- remove the first % index_0 search item from the lookup search list and not for the 
				cache dict we will leave the history same as it's for more cookies
			"""
			if len(self.lookup) >= self.capacity:
				tmp = self.lookup.pop(0)
				del self.cache[tmp]
			self.lookup.append(key) # either ways we will append that key to the lookup lst 
		self.cache[key] = value # either ways we will update the val af that key
		return 


	def get(self, key):
		""" to get the val of the given key, this process require to 
		1- bring the key val result to the fornt of the lookup search list and,
		2- to remove its old position  
		"""
		if key in self.cache:
			self.lookup.remove(key)
			self.lookup.append(key)
			return self.cache[key]
		return None

if __name__ == '__main__':
	cache = URLCache(2)
	cache.set(3,3)
	cache.set(4,4)
	print(cache.get(3))
	print(cache.cache , cache.lookup)
	print(cache.get(2))
	cache.set(2, 2)
	print(cache.get(4))
	print(cache.get(3))
	print(cache.cache, cache.lookup)


"""
cache = LRUCache(2)

cache.put(3, 3)
cache.put(4, 4)
print(cache.get(3))
# 3
print(cache.get(2))
# None

cache.put(2, 2)

print(cache.get(4))
# None (pre-empted by 2)
print(cache.get(3))
# 3

"""