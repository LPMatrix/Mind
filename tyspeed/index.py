file = open('words.txt','r')
words = file.read().split('\n')
done = open('newone.txt','w')
for word in words:
	done.write(repr(word) + ",\n")
	