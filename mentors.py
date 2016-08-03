from random import choice

mentors = ['@cent', '@oreoluwa', '@root', '@chigbo.io']
mentees = ['a.magana', 'maslah', 'morris', 'ben_k']


def pair_em():
    global mentors
    global mentees
    print mentors, ' - Mentors'
    print mentees, ' - Mentees'
    mentor = choice(mentors)
    mentee = choice(mentees)
    print "{} is gonna mentor {}".format(mentor, mentee)
    mentors.remove(mentor)
    mentees.remove(mentee)


if __name__ == '__main__':
    for i in range(4):
    	pair_em()

