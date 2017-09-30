# Fibonacci Numbers!
## Get the fionacci number to the nth place
Install:

``npm install the-fibonacci``

or

``yarn add the-fibonacci``

####use:
Takes an ```int``` and returns an array. 

First index is the fibonacci number at ``int`` 

Second index is an array of every fibonacci number up to ``int``

``theFibonacci(0)``  >> ``[0[0]]``

``theFibonacci(10)`` >> ``[55, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]]``

if an int is not supplied an empty array is returned.

``theFibonacci()``  >> ``[]``

``theFibonacci(null)``  >> ``[]``

``theFibonacci(1.3)``  >> ``[]``

``theFibonacci('12')``  >> ``[]``
