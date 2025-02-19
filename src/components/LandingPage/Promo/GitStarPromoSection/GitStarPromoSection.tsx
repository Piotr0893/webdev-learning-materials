/** @jsxImportSource react */

import classes from './GitStarPromoSection.module.css'
import { Stars } from './Stars'
import { useGitStars } from './useGitStars'
import { useStarsHover } from './useStarsHover'

export const GitStarPromoSection = () => {
	const { starCount, hasStars } = useGitStars()
	const { handleHoverOut, handleHoverOver, isHoveredOver } = useStarsHover()

	return (
		<div className={classes.root}>
			<div className={classes.textContainer}>
				<h2 className={classes.sectionTitle}>Give us a ⭐ on GitHub</h2>
				<a
					onMouseOver={handleHoverOver}
					onMouseOut={handleHoverOut}
					className={classes.button}
					href='https://github.com/NowYouKnowProgramming/webdev-learning-materials'
				>
					<span className={classes.textInButton}>Star</span>
					<span className={classes.separator} aria-hidden='true' />
					{hasStars ? (
						<span className={classes.textInButton}>{starCount}</span>
					) : (
						'😎'
					)}
				</a>
			</div>
			<Stars shouldGlow={isHoveredOver} />
		</div>
	)
}
