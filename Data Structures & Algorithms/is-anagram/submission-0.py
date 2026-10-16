class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = {}
        for a in s:
            if a in count:
                count[a] = count[a] + 1
            else:
                count[a] = 1

        count2 = {}
        for a in t:
            if a in count2:
                count2[a] = count2[a] + 1
            else:
                count2[a] = 1
        return count == count2