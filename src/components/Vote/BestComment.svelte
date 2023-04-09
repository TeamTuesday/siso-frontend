<script lang="ts">
	import {voteType} from '$store/voteStore';
	import Button from '@/components/common/button/Button.svelte';

	export let type: voteType = voteType.AGREE;
	export let data: VoteModule.BestComment | null = {
		id: '',
		createdAt: '',
		updateAt: '',
		deleteAt: '',
		userId: '',
		parentId: '',
		voteType: voteType.AGREE,
		comment: '',
		likeCount: 0
	};
	const isAgree = type === voteType.AGREE;
</script>

<div class="best-comment mt-4" class:mb-4={isAgree}>
	<div class="best-comment-header">
		<div class="flex gap-2 items-center">
			<p
				class="text-[18px] leading-[21px] font-bold text-[#FFD952] text-[#BD8DDB]"
				class:!text-[#FFD952]={!isAgree}
			>
				{isAgree ? 'A' : 'B'}
			</p>
			<span
				class="w-[19px] h-[19px] flex flex-col justify-center items-center p-0 bg-transparent text-[11px] text-white border-0 gap-[1px]"
			>
				<img class="w-full" src="/images/sample_user.svg" alt="sampleUser" />
			</span>
			<p class="text-[12px] leading-[16px] text-[#222222] font-medium">
				{data && data.userId}
			</p>
		</div>
		<div class="flex items-center gap-1">
			<p class="text-[12px] leading-[16px] text-[#999999]">
				{data && data.likeCount}
			</p>
			<Button src="/images/icon/icn_poll_comment.svg" alt="menuButton" />
			<!-- 좋아요 눌렀다면 - 기능추가도 필요 - 
      <Button src="/images/icon/icn_polled_comment.svg" alt="menuButton" ></Button> -->
		</div>
	</div>
	<div class="best-comment-content">{data && data.comment}</div>
</div>

<style lang="postcss">
	.best-comment {
		@apply w-full flex flex-col justify-start gap-2 pb-5 border-b;
	}
	.best-comment-header {
		@apply w-full flex justify-between items-center;
	}
	.best-comment-content {
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		word-wrap: break-word;
		@apply text-[14px] leading-[20px] text-[#666666] font-medium w-full min-h-[40px] overflow-hidden;
	}
</style>
