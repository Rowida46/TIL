"""
	Design an LRU cache
	** We are caching the results of web queries

"""

class Node(object):
	"""docstring for Node"""
	def __init__(self, request):
		self.request = request
		self.prev = None
		self.next = None

class LinkedList:
	def __init__(self):
		self.head = None
		self.tail = None

	def pushat0(self, url):
		""" to push at index 0 
		this new url would be the hrad of this linked List
		"""
		node = Node(url)
		if not self.head:
			self.head = self.tail = node
		node.next, self.head.prev = self.head, node
		self.head = node
		return 

	def push(self, url):
		""" to push the url at the end of the linked list
		the new url would be the tail
		"""
		node = Node(url)
		if not self.head:
			self.head = self.tail = node
		else:
			self.tail.next, node.prev = node, self.tail
			self.tail = node
		return 
		
	def add_to_front(self, url):
		""" This would be a by defulat feature to cash the result & request of the giveen url
		after amount of time the result would be added at the end of the linkedlist to save the time consuming of
		retiving the result
		Note :- we won't change the url position to the end, the pprocess would be like replication at the end..
		"""
		"""
		node = Node(url)
		if not self.head:
			self.head = self.tail = node
		else :
			self.tail.next = node
			self.tail = node
		"""
		self.push(url)
		return

	def move_to_front(self, url):
		""" this meant to re / change the position of that giveen url to the end
		-- we assume this url already exist in the linked list
		-- the process would be like this 
		1- find the position of that given URL
		2- point its prv node yo its next
		3- call the push method
		"""
		cur = self.head
		while cur:
			if cur.request == url and cur.next:
				cur.next, cur.next.prev = cur.next.next, cur # to skip & drop that url node from the linked list
				break
		sel.push(url) 
	
	def remove_from_tail(self, url):
		if self.head == self.tail:
			self.tail = self.head = None
		tmp = self.tail
		self.tail, tmp.prev = tail.prev, None
		return 

class Cache:
	def __init__(self, MAX_SIZE = 26):
		self.MAX_SIZE = MAX_SIZE
		self.lookup = {} # Call me hashmap syndrom for this
		self.self = 0
		self.linked_lst = LinkedList()
	
	def get(self, query):
		"""Get the query& url result of the req from the cache.
        Accessing a node updates its position to the front of the LRU list.
        """
		node = self.lookup.get(query)
		if not node:
			return None
		# assert node is not None, "Not Found"
		self.linked_lst.move_to_front(query)
		return node.request

	def set(self, url, result):
		""" Set the result for the given URL key in the cache.
    		* To search for this given url with a defult None
    	"""
		node = self.lookup.get(url, None) 
		if not node : 
			""" The URL Not exist ...
    		- Append this url to the linked list if we dnt exceed the maxSize
    		- If we exceed the maxsize -> randomly pop from the end
    		 	* Remove the oldest entry from the linked list and lookup
    		"""
			if self.size < self.MAX_SIZE:
				self.size += 1	
			else:
				self.lookup.pop(self.linked_lst.tail.request)
				self.linked_lst.remove_from_tail()
			new_node = Node(result)
			self.linked_lst.add_to_front(new_node) 
			self.lookup[url] = result
		else:
			"""
    		the URL is found 
    		1- update the request val with the new result
    		2- add the url to end of the linkedlist
    		"""
			node.request = result
			self.linked_lst.add_to_front(node)
		return 


       