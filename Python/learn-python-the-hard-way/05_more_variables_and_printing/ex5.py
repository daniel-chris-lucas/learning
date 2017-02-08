name = 'Daniel C. Lucas'
age = 26
height = 73 # inches
weight = 180 # lbs
eyes = 'Blue'
teeth = 'White'
hair = 'Brown'

height_cm = height * 2.54
weight_kg = weight * 0.453592

print "Let's talk about %s." % name
print "He's %d centimeters tall." % height_cm
print "He's %.1f kilos heavy." % weight_kg
print "Actually that's not too heavy."
print "He's got %s eyes and %s hair." % (eyes, hair)
# %r should show anything. Calls repr() on the object
print "His teeth are usually %r depending on the coffee." % teeth

# This line is tricky, try to get it exactly right
print "If I add %d, %d and %d I get %d." % (
    age, height, weight, age + height + weight)
