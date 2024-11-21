import { Paper, Stack, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export default function Card({ icon, subtitle, chart, increase }) {
    return (
        <Paper
            sx={{
                minWidth: "333px",
                p: 1.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Stack>
                {icon}
                <Typography variant="body2" sx={{ fontSize: "13px" }}>
                    Title
                </Typography>
            </Stack>

            <Stack>
                <Typography variant="body2" sx={{ fontSize: "13px" }}>
                    {subtitle}
                </Typography>
            </Stack>

            <Stack>
                {chart}
                <Typography variant="body2" sx={{ fontSize: "13px" }}>
                    {increase}
                </Typography>
            </Stack>
        </Paper>
    );
}

// إضافة PropTypes للتحقق من صحة الخصائص
Card.propTypes = {
    icon: PropTypes.node.isRequired,  // يجب أن تكون موجودة
    subtitle: PropTypes.string.isRequired, // يجب أن تكون موجودة
    chart: PropTypes.node.isRequired, // يجب أن تكون موجودة
    increase: PropTypes.string.isRequired, // يجب أن تكون موجودة
};