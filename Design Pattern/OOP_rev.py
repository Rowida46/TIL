class EditorState:
	def __init__(self, content):
		self.content = content
	def EditState(content):
		self.content = content
	def getContent(self):
		return self.content 


class Editor:
	def __init__(self):
		self._content = ''
	def restor(self , state):
		self.content = state.getContent()
		return self.content	
	def createState(self):
		return EditorState(self._content)
	def setContent(self, content):
		self._content = content

class History:
	def __init__(self):
		self.state = []

	def pop(self):
		ans = self.state.pop()
		return ans

	def push(self, state):
		self.state.append(state)

ed = Editor()
his = History()



ed.setContent("a")
ed.createState()
his.push(ed.createState())


ed.setContent("b")
ed.createState()
his.push(ed.createState())


ed.setContent("content")
ed.createState()
his.push(ed.createState())

print(ed.restor(his.pop()))

print(ed.restor(his.pop()))
