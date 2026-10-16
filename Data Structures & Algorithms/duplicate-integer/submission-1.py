class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        uniques = set()
        for i in nums:
            if not (i in uniques):
                uniques.add(i)
            else:
                return True
            
        return False